expression = input()
open_stack = []

for index, char in enumerate(expression):
    if char == '(':
        open_stack.append(index)
    elif char == ')':
        closing_index = index
        opening_index = open_stack.pop()
        print(expression[opening_index:closing_index + 1])