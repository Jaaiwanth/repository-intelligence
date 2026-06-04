import ollama

from config import MODEL_NAME

print(f"Using model: {MODEL_NAME}")
def call_llm(prompt):

    response = ollama.chat(
        model=MODEL_NAME,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]