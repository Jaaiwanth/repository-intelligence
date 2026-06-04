from fastapi import FastAPI
from pydantic import BaseModel
import pypandoc
import os
from analyzer.dependency import build_repo_dependency_graph,graph_summary
from files_utils.files import get_source_files as files
from llm_calls.analyze import analyze_file
from generate_project_report import generate_project_report
from analyzer.ast_analyze import analyze_code
import pathlib
app = FastAPI()
class RepoRequest(BaseModel):
    repo_path : str
@app.post("/generate_report")
def generate_report(data : RepoRequest):
    repo_path = data.repo_path
    if not os.path.exists(repo_path):
        return {
            "error": "Repository path not found"
        }
    file_list = files(repo_path)
    all_metadata = []
    for file in file_list:
        print(f"Analyzing: {pathlib.Path(file).stem}")
        metadata = analyze_file(file)
        ast_data = analyze_code(file)
        if ast_data and metadata:
            metadata.update(ast_data)
            # nodes = { "nodes": list(G.nodes(data=True)) }
            # edges = { "edges": list(G.edges(data=True)) }
            # metadata.update(nodes)
            # metadata.update(edges)
            print(f"Metadata for {pathlib.Path(file).stem}:", metadata)
            all_metadata.append(metadata)
    G = build_repo_dependency_graph(all_metadata,file_list)
    trim_file_list = [pathlib.Path(f).name for f in file_list]
    graph_analysis = graph_summary(G,trim_file_list)
    print("Graph Analysis:", graph_analysis)
    report = generate_project_report(all_metadata, graph_analysis)

    with open("project_report.md","w",encoding="utf-8") as f:
        f.write(report)
    pypandoc.convert_file("project_report.md","pdf",outputfile="project_report.pdf",extra_args=["--pdf-engine=xelatex"])
    return {
        "file_count": len(file_list),
        "analyzed_files": len(
            all_metadata
        ),
        "file_metadata": all_metadata,
        "project_report": report
    }







