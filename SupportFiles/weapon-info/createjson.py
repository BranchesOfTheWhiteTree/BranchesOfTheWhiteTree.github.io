from os import system as sys

fileName = "weapons.txt"

with open(fileName, "r") as f:
    contents = f.readlines()
    for line in contents:
        fname = line.strip("\n")
        # print(fname)
        sys(f"touch {fname}")