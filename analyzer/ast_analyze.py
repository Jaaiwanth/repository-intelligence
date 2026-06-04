import ast
class CodeAnalyzer(ast.NodeVisitor):
    def __init__(self):
        self.imports = []
        self.classes = []
        self.functions = []
        self.variables = []
        self.function_calls = []
        self.inheritance = {}

    def visit_Import(self, node):
        for alias in node.names:
            self.imports.append(alias.name)

        self.generic_visit(node)

    def visit_ImportFrom(self, node):
        module = node.module or ""
        self.imports.append(module)

        self.generic_visit(node)

    def visit_ClassDef(self, node):
        self.classes.append(node.name)

        bases = []
        for base in node.bases:
            if isinstance(base, ast.Name):
                bases.append(base.id)
            elif isinstance(base, ast.Attribute):
                bases.append(base.attr)

        self.inheritance[node.name] = bases

        self.generic_visit(node)

    def visit_FunctionDef(self, node):
        self.functions.append(node.name)

        self.generic_visit(node)

    def visit_Assign(self, node):
        for target in node.targets:
            if isinstance(target, ast.Name):
                self.variables.append(target.id)

        self.generic_visit(node)

    def visit_Call(self, node):
        if isinstance(node.func, ast.Name):
            self.function_calls.append(node.func.id)

        elif isinstance(node.func, ast.Attribute):
            self.function_calls.append(node.func.attr)

        self.generic_visit(node)

def analyze_code(source_code_path):
    with open(source_code_path,"r",encoding="utf-8") as f:
        source = f.read()

    tree = ast.parse(source)    

    analyzer = CodeAnalyzer()
    analyzer.visit(tree)

    result = {
        "imports": analyzer.imports,
        "classes": analyzer.classes,
        "functions": analyzer.functions,
        "variables": analyzer.variables,
        "function_calls": analyzer.function_calls,
        "inheritance": analyzer.inheritance
    }

    return result