from collections import deque

queue = deque()
pumps_count = int(input())

for _ in range(pumps_count):
    pump = [int(x) for x in input().split()]
    queue.append(pump)

car_fuel = 0
completed = True

for index in range(pumps_count):
    car_fuel = 0
    completed = True
    for pump in queue:
        petrol = pump[0]
        distance = pump[1]
        car_fuel += petrol
        if distance > car_fuel:
            completed = False
            break
        car_fuel -= distance
    if completed:
        print(index)
        break
    queue.append(queue.popleft())