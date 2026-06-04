from llm_calls.llm_call import call_llm
from  files_utils.chunk_text import chunk_text
from files_utils.chunk_text import chunk_text
from files_utils.summarize_chunk import summarize_chunk
def summarize_large_file(file_name, code):

    chunks = chunk_text(code)

    chunk_summaries = []

    for idx, chunk in enumerate(chunks):

        summary = summarize_chunk(
            chunk,
            file_name
        )

        chunk_summaries.append(
            f"Chunk {idx+1}:\n{summary}"
        )

    merged_summary = "\n\n".join(
        chunk_summaries
    )

    prompt = f"""
You are a senior software architect.

The following are summaries of chunks
from the same source file.

Generate ONE consolidated summary.

File:
{file_name}

Chunk Summaries:
{merged_summary}

Return:

1. File Purpose
2. Classes
3. Functions
4. APIs
5. Database Usage
6. ML Models
7. External Services
8. Dependencies
9. Overall Summary
"""

    return call_llm(prompt)