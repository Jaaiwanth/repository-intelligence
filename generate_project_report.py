import json
from llm_calls.llm_call import call_llm
def generate_project_report(file_metadata,graph_analysis):

    metadata_json = json.dumps(
        file_metadata,
        indent=2
    )
    graph_analysis_json = json.dumps(
    graph_analysis,
    indent=4
    )

    prompt = f"""You are a senior software architect who has just spent several hours reviewing 
an unfamiliar codebase. Your job is to brief a new engineer joining the project today.

Your only sources of truth are the AST metadata and dependency graph below.
If evidence is insufficient for a claim, say exactly:
"Cannot be determined from static analysis."
Never guess. Never use "appears to", "likely", "might", or "possibly" for 
anything the data can answer directly.

CRITICAL — Edge Direction:
A → B means A imports B.
"Imports" = outgoing edges from this file.
"Dependents" = incoming edges to this file.
Never swap these. The entry point is never a bottleneck. 
Bottlenecks have high in-degree.

Metadata:
{metadata_json}

Graph Analysis:
{graph_analysis_json}

---

Before writing, internalize the full metadata for every file. Each file's metadata 
contains fields like purpose, summary, responsibilities, inputs, outputs, 
api_endpoints, external_services, important_functions, classes, imports, and 
function_calls. These fields are your primary source of technical substance.
Use them. Do not ignore them.

Then produce the report a new engineer needs to understand this system from scratch.
Let the architecture you discover determine the structure and emphasis.

For the overall system: explain what it does end-to-end, how data flows through it,
which layers exist, and how they connect. This should read like an architect 
explaining the system on a whiteboard, not a list of file descriptions.

For each file: go deep into what the metadata actually tells you. If there are API 
endpoints, name them with their methods and paths. If there are key functions, 
explain what they do and where they fit in the data flow. If there are inputs and 
outputs, describe what moves in and out. If there are external services, explain 
how they are used. If there are classes, explain their role. Connect each file to 
the files that depend on it and the files it depends on, explaining what that 
relationship means architecturally — not just listing the names.

For the dependency analysis: show how the system is wired together. Identify 
bottlenecks by in-degree, trace the critical paths, flag any files with no 
imports and no dependents and assess whether they are dead code or intentionally 
standalone.

For improvements: every suggestion must be grounded in a specific structural 
problem visible in the graph or metadata. No generic advice.

The standard for every file description: a reader should finish it knowing exactly 
what they would find if they opened that file — the real functions, the real 
endpoints, the real data transformations, the real external calls. 
"Handles X" or "manages Y" is a failure. Name the actual things.
"""

    return call_llm(prompt) 