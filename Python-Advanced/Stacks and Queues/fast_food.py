from collections import deque


queue = deque()
quantity_food = int(input())
orders = input().split()

for order in orders:
    queue.append(int(order))

print(max(queue))

while len(queue) > 0:
    current_client = queue[0]
    if quantity_food - current_client >= 0:
        quantity_food -= current_client
        queue.popleft()
    else:
        break

if queue:
    queue = [str(x) for x in queue]
    print(f'Orders left: {" ".join(queue)}')
else:
    print('Orders complete')