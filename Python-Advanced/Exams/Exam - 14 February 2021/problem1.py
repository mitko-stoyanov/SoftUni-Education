from collections import deque


def check_ready(first, second, third):
    if first == 3 and second == 3 and third == 3:
        return True
    return False


firework_effects = deque(input().split(', '))
explosive_powers = [int(x) for x in input().split(', ')]

palm_fireworks = 0
willow_fireworks = 0
crossette_fireworks = 0

while not check_ready(palm_fireworks, willow_fireworks, crossette_fireworks) and firework_effects and explosive_powers:
    first_effect = int(firework_effects.popleft())
    if first_effect <= 0:
        continue
    last_explosive = explosive_powers.pop()
    if last_explosive <= 0:
        firework_effects.appendleft(str(first_effect))
        continue
    current_sum = first_effect + last_explosive
    if current_sum % 3 == 0 and current_sum % 5 != 0:
        palm_fireworks += 1
    elif current_sum % 5 == 0 and current_sum % 3 != 0:
        willow_fireworks += 1
    elif current_sum % 3 == 0 and current_sum % 5 == 0:
        crossette_fireworks += 1
    else:
        first_effect -= 1
        firework_effects.append(str(first_effect))
        explosive_powers.append(last_explosive)

if palm_fireworks >= 3 and willow_fireworks >= 3 and crossette_fireworks >= 3:
    print("Congrats! You made the perfect firework show!")
else:
    print("Sorry. You can't make the perfect firework show.")
if firework_effects:
    print(f'Firework Effects left: {", ".join(firework_effects)}')
if explosive_powers:
    print(f'Explosive Power left: {", ".join([str(x) for x in explosive_powers])}')

print(f'Palm Fireworks: {palm_fireworks}')
print(f'Willow Fireworks: {willow_fireworks}')
print(f'Crossette Fireworks: {crossette_fireworks}')