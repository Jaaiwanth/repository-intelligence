from llm_calls.llm_call import call_llm

def summarize_chunk(chunk, file_name):

    prompt = f"""
You are a senior software architect.

Analyze this code chunk.

Return a concise summary.

File:
{file_name}

Code:
{chunk}

Output format:

- Purpose
- Important classes
- Important functions
- APIs
- Database usage
- AI/ML usage
- External services
- Key observations
"""

    return call_llm(prompt)