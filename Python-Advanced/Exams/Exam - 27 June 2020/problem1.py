from collections import deque


data = {
    40: 'Datura Bombs',
    60: 'Cherry Bombs',
    120: 'Smoke Decoy Bombs'
}

created_bombs = {
    'Cherry Bombs': 0,
    'Datura Bombs': 0,
    'Smoke Decoy Bombs': 0
}
bomb_effects = deque([int(x) for x in input().split(', ')])
bomb_casings = [int(x) for x in input().split(', ')]
is_ready = False

while bomb_effects and bomb_casings and not is_ready:
    is_created = False
    first_effect = bomb_effects.popleft()
    last_casing = bomb_casings.pop()
    current_sum = first_effect + last_casing
    for key in data.keys():
        if key == current_sum:
            is_created = True
            current_bomb_name = data[key]
            if current_bomb_name in created_bombs.keys():
                created_bombs[current_bomb_name] += 1
            break
    if not is_created:
        bomb_effects.appendleft(first_effect)
        bomb_casings.append(last_casing - 5)
    for value in created_bombs.values():
        if not value >= 3:
            is_ready = False
            break
        else:
            is_ready = True

if is_ready:
    print("Bene! You have successfully filled the bomb pouch!")
else:
    print("You don't have enough materials to fill the bomb pouch.")

if not bomb_effects:
    print("Bomb Effects: empty")
else:
    print(f'Bomb Effects: {", ".join([str(x) for x in bomb_effects])}')

if not bomb_casings:
    print("Bomb Casings: empty")
else:
    print(f'Bomb Casings: {", ".join([str(x) for x in bomb_casings])}')

for key, value in sorted(created_bombs.items()):
    print(f'{key}: {value}')