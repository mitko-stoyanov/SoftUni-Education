from collections import deque

materials = [int(x) for x in input().split()]
magic_level = deque([int(x) for x in input().split()])

crafted_items = {}

data = {
    150: 'Doll',
    250: 'Wooden train',
    300: 'Teddy bear',
    400: 'Bicycle'
}

while materials and magic_level:
    last_box = materials.pop()
    first_magic = magic_level.popleft()
    total_magic = last_box * first_magic

    if first_magic == 0 and last_box == 0:
        continue
    if first_magic == 0:
        materials.append(last_box)
        continue
    if last_box == 0:
        magic_level.appendleft(first_magic)
        continue

    if total_magic in data:
        current_item = data[total_magic]
        if current_item in crafted_items:
            crafted_items[current_item] += 1
        else:
            crafted_items[current_item] = 1
    else:
        if total_magic < 0:
            materials.append(last_box + first_magic)
        elif total_magic > 0:
            materials.append(last_box + 15)
is_done = False
if 'Doll' in crafted_items and 'Wooden train' in crafted_items:
    is_done = True
if 'Teddy bear' in crafted_items and 'Bicycle' in crafted_items:
    is_done = True

if is_done:
    print("The presents are crafted! Merry Christmas!")
else:
    print("No presents this Christmas!")

if materials:
    print(f'Materials left: {", ".join(reversed([str(x) for x in materials]))}')
if magic_level:
    print(f'Magic left: {", ".join([str(x) for x in magic_level])}')

for key, value in sorted(crafted_items.items()):
    print(f'{key}: {value}')
