from setuptools import setup, find_packages

setup(
    name="blog-backend",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        "fastapi",
        "uvicorn",
        "sqlalchemy",
        "python-frontmatter",
        "PyGithub",
        "python-dotenv",
        "aiosqlite",
    ],
    python_requires=">=3.8",
) 