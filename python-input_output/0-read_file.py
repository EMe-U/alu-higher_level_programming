#!/usr/bin/python3
read_file = __import__('0-read_file').read_file

read_file("my_file_0.txt")
def read_file(filename=""):
  '''reads the data from outside file'''
    with open(filename, "r", encoding="utf-8") as file:
        print(file.read())
