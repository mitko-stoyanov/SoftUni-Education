from collections import deque


queue = deque()
racks_counter = 1
clothes = input().split()
capacity_rack = int(input())
current_capacity = capacity_rack
for cloth in clothes:
    queue.append(int(cloth))

while len(queue) > 0:
    current_cloth = queue[0]
    if current_capacity - current_cloth >= 0:
        current_capacity -= current_cloth
    else:
        current_capacity = capacity_rack
        racks_counter += 1
        current_capacity -= current_cloth
    queue.popleft()
print(racks_counter)