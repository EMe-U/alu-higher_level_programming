#!/usr/bin/python3
read_file = __import__('0-read_file').read_file

read_file("my_file_0.txt")
def read_file(filename=""):
    """
    Reads a text file (UTF8) and prints it to stdout.

    Args:
        filename (str): The name of the file to read. Defaults to an empty string.

    Returns:
        None
    """
    with open(filename, "r", encoding="utf-8") as file:
        print(file.read())
