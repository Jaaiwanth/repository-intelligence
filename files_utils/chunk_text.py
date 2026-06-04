from config import MAX_CHARS_PER_CHUNK 
def chunk_text(text, chunk_size=MAX_CHARS_PER_CHUNK):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start = end
    return chunks