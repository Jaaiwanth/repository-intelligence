import networkx as nx
import builtins


def build_repo_function_set(all_metadata):

    repo_functions = set()

    for metadata in all_metadata:
        for func in metadata.get("functions", []):
            repo_functions.add(func)

    return repo_functions


def build_function_to_file_map(all_metadata):

    function_to_file = {}

    for metadata in all_metadata:

        file_name = metadata["file_name"]

        for func in metadata.get("functions", []):

            function_to_file[func] = file_name

    return function_to_file


def update_dependency_graph(
    G,
    metadata,
    file_list,
    repo_functions,
    builtin_functions,
    function_to_file
):

    file_name = metadata["file_name"]

    G.add_node(
        file_name,
        type="file"
    )

    repo_modules = {
        f.replace(".py", ""): f
        for f in file_list
    }

    # ----------------------------------
    # Imports -> file dependencies
    # ----------------------------------
    for module in metadata.get("imports", []):

        if module not in repo_modules:
            continue

        imported_file = repo_modules[module]

        G.add_node(
            imported_file,
            type="file"
        )

        G.add_edge(
            file_name,
            imported_file,
            relation="imports"
        )

    # ----------------------------------
    # Function calls -> file dependencies
    # ----------------------------------
    for call in metadata.get("function_calls", []):

        if call in builtin_functions:
            continue

        if call not in repo_functions:
            continue

        if call not in function_to_file:
            continue

        target_file = function_to_file[call]

        # Ignore self-calls
        if target_file == file_name:
            continue

        G.add_edge(
            file_name,
            target_file,
            relation="calls"
        )

    # ----------------------------------
    # Class inheritance
    # ----------------------------------
    for child, parents in metadata.get(
        "inheritance",
        {}
    ).items():

        G.add_node(
            child,
            type="class"
        )

        for parent in parents:

            G.add_node(
                parent,
                type="class"
            )

            G.add_edge(
                child,
                parent,
                relation="inherits"
            )

    return G


def build_repo_dependency_graph(
    all_metadata,
    file_list
):

    G = nx.DiGraph()

    repo_functions = build_repo_function_set(
        all_metadata
    )

    function_to_file = (
        build_function_to_file_map(
            all_metadata
        )
    )

    builtin_functions = set(
        dir(builtins)
    )

    for metadata in all_metadata:

        update_dependency_graph(
            G,
            metadata,
            file_list,
            repo_functions,
            builtin_functions,
            function_to_file
        )

    return G


def graph_to_json(G):

    return {
        "nodes": [
            {
                "id": node,
                **attrs
            }
            for node, attrs
            in G.nodes(data=True)
        ],

        "edges": [
            {
                "source": source,
                "target": target,
                **attrs
            }
            for source, target, attrs
            in G.edges(data=True)
        ]
    }


def get_graph_stats(G):

    return {
        "total_nodes": G.number_of_nodes(),
        "total_edges": G.number_of_edges()
    }


def find_cycles(G):

    return list(
        nx.simple_cycles(G)
    )


def most_connected_nodes(
    G,
    top_n=10
):

    degrees = sorted(
        G.degree(),
        key=lambda x: x[1],
        reverse=True
    )

    return degrees[:top_n]


def find_affected_files(
    G,
    node_name
):

    if node_name not in G:
        return []

    reverse_graph = G.reverse()

    affected = nx.descendants(
        reverse_graph,
        node_name
    )

    return sorted(
        list(affected)
    )


def find_dependencies(
    G,
    node_name
):

    if node_name not in G:
        return []

    dependencies = nx.descendants(
        G,
        node_name
    )

    return sorted(
        list(dependencies)
    )


def analyze_all_files(
    G,
    file_list
):

    analysis = {}

    for file_name in file_list:

        analysis[file_name] = {
            "depends_on": find_dependencies(
                G,
                file_name
            ),
            "affects": find_affected_files(
                G,
                file_name
            )
        }

    return analysis


def graph_summary(G, file_list):

    files = [
        n
        for n, d in G.nodes(data=True)
        if d.get("type") == "file"
    ]

    classes = [
        n
        for n, d in G.nodes(data=True)
        if d.get("type") == "class"
    ]

    return {
        "files": len(files),
        "classes": len(classes),
        "dependencies": G.number_of_edges(),
        "cycles": find_cycles(G),
        "most_connected": most_connected_nodes(G),
        "file_analysis": analyze_all_files(
            G,
            file_list
        )
    }