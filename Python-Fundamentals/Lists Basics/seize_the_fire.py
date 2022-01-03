fire_cells = input()
fire_cells_list = fire_cells.split('#')
water = int(input())
effort = 0
flag = False
list_cells = []
print('Cells:')
total_fire = 0

for element in fire_cells_list:
    new_list = element.split(' = ')
    level = new_list[0]
    amount_fire = int(new_list[1])

    if water - amount_fire < 0:
        continue
    else:
        if level == 'High':
            if not 81 <= amount_fire <= 125:
                continue
            else:
                water -= amount_fire
                list_cells.append(amount_fire)
                flag = True
        elif level == 'Low':
            if not 1 <= amount_fire <= 50:
                continue
            else:
                water -= amount_fire
                list_cells.append(amount_fire)
                flag = True
        elif level == 'Medium':
            if not 51 <= amount_fire <= 80:
                continue
            else:
                water -= amount_fire
                list_cells.append(amount_fire)
                flag = True
        if flag:
            effort += 0.25 * amount_fire
            total_fire += amount_fire
for el in list_cells:
    print(f'- {el}')

print(f'Effort: {effort:.2f}')
print(f'Total Fire: {total_fire}')