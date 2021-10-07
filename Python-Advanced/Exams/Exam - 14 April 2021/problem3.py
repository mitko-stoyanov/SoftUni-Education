from collections import deque


def flights(*args):
    all_data = {}
    names = deque()
    distances = deque()
    for i in range(len(args)):
        if args[i] == 'Finish':
            break
        if i % 2 == 0:
            names.append(args[i])
        else:
            distances.append(args[i])

    while names:
        current_destination = names.popleft()
        current_distance = distances.popleft()
        if current_destination not in all_data:
            all_data[current_destination] = int(current_distance)
        else:
            all_data[current_destination] += int(current_distance)

    return all_data
