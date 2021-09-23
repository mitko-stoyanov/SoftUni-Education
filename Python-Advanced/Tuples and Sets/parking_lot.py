n = int(input())
cars_data = set()

for _ in range(n):
    direction, car_number = input().split(', ')
    if direction == 'IN':
        cars_data.add(car_number)
    elif direction == 'OUT':
        if car_number in cars_data:
            cars_data.remove(car_number)
if not cars_data:
    print('Parking Lot is Empty')
else:
    for car in cars_data:
        print(car)