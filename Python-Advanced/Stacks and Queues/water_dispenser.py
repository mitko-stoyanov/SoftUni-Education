from collections import deque

queue = deque()
starting_water = int(input())
command = input()

while not command == 'Start':
    name = command
    queue.append(name)
    command = input()

new_command = input()
while not new_command == 'End':
    new_command = new_command.split()
    action = new_command[0]
    if action == 'refill':
        liters = int(new_command[1])
        starting_water += liters
    else:
        needed_liters = int(action)
        if starting_water - needed_liters >= 0:
            print(f'{queue[0]} got water')
            starting_water -= needed_liters
            queue.popleft()
        else:
            print(f'{queue[0]} must wait')
            queue.popleft()
    new_command = input()
print(f'{starting_water} liters left')