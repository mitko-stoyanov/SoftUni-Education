from collections import deque

command = input()
qq = deque()

while not command == 'End':
    if not command == 'Paid':
        name = command
        qq.append(name)
    else:
        while len(qq) > 0:
            print(qq.popleft())
    command = input()

print(f'{len(qq)} people remaining.')