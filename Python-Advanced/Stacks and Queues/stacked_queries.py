n = int(input())

stack = []
for _ in range(n):
    queries = input().split()
    command = queries[0]
    if command == '1':
        num = int(queries[1])
        stack.append(num)
    elif command == '2':
        if stack:
            stack.pop()
    elif command == '3':
        if stack:
            print(max(stack))
    elif command == '4':
        if stack:
            print(min(stack))
output = []
while len(stack) > 0:
    output.append(stack.pop())

output = [str(x) for x in output]
print(', '.join(output))