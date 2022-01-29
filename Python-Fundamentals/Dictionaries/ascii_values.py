characters = input().split(', ')
numbers = [ord(x) for x in characters]
print(dict(zip(characters, numbers)))