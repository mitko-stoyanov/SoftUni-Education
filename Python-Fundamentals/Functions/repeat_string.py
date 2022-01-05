def repeat_string(str, n):
    result = str * n
    return result

text = input()
count = int(input())

print(repeat_string(text, count))