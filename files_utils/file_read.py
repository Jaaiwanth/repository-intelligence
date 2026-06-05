def read_file(file_path):
    if not file_path.endswith(".py"):
        return None
    try:
        with open(
            file_path,
            "r",
            encoding="utf-8",
            errors="ignore"
        ) as f:

            return f.read()

    except Exception:
        return ""