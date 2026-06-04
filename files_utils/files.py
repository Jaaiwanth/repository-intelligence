import os
def get_source_files(repo_path):
    files = []
    IGNORE_DIRS = {".git","node_modules","__pycache__",".venv","venv","dist","build",".idea",".vscode"}
    VALID_EXTENSIONS = {".py",".js",".ts",".jsx",".tsx",".java",".c",".cpp",".cs",".go",".rs"}
    for root, dirs, filenames in os.walk(repo_path):

        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]

        for filename in filenames:

            ext = os.path.splitext(filename)[1].lower()

            if ext in VALID_EXTENSIONS:

                full_path = os.path.join(root, filename)

                files.append(full_path)

    return files