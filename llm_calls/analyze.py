import os
import json
from files_utils.file_read import read_file
from llm_calls.llm_call import call_llm
from config import MAX_CHARS_PER_CHUNK
from files_utils.summarize_large_file import summarize_large_file
def analyze_file(file_path):
    code = read_file(file_path)

    if not code.strip():

        return None

    relative_name = os.path.basename(
        file_path
    )

    if len(code) <= MAX_CHARS_PER_CHUNK:

        prompt = f"""
You are a senior software architect.

Analyze this source file.

File:
{relative_name}

Code:
{code}

Return STRICT JSON.
Summary should be concise but comprehensive. not more than 100 words.   
Schema:

{{
  "file_name": "",
  "purpose": "",
  "summary": "",
  "responsibilities": [],
  "business_role": "",
  "inputs": [],
  "outputs": [],
  "api_endpoints": [],
  "database_usage": [],
  "external_services": [],
  "important_functions": []
}}
"""

        result = call_llm(prompt)

        try:
            return json.loads(result)

        except Exception:

            return {
                "file_name": relative_name,
                "summary": result
            }

    consolidated_summary = summarize_large_file(
        relative_name,
        code
    )

    prompt = f"""
Convert the following file analysis
into STRICT JSON.

Analysis:

{consolidated_summary}

Schema:

{{
    "file_name":"",
    "purpose":"",
    "possible_improvements": [],
    "design_patterns": [],
    "summary":"",
    "bugs_or_issues":[]
}}
"""

    result = call_llm(prompt)

    try:
        return json.loads(result)

    except Exception:

        return {
            "file_name": relative_name,
            "summary": consolidated_summary
        }

