from collections import deque


cars = deque()
green_light = int(input())
free_window = int(input())
passed_cars = 0
crash = False

while not crash:
    line = input()
    if line == 'END':
        break
    if line == 'green':
        current_green_light = green_light
        while cars and current_green_light > 0:
            car = cars.popleft()
            if current_green_light >= len(car) or current_green_light + free_window >= len(car):
                passed_cars += 1
                current_green_light -= len(car)
            else:
                print('A crash happened!')
                print(f'{car} was hit at {car[current_green_light + free_window]}.')
                crash = True
                break
    else:
        cars.append(line)

if not crash:
    print('Everyone is safe.')
    print(f'{passed_cars} total cars passed the crossroads.')