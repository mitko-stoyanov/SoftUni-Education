lost_fights_count = int(input())
helmet_price = float(input())
sword_price = float(input())
shield_price = float(input())
armor_price = float(input())

broken_helmets = 0
broken_swords = 0
broken_shields = 0
broken_armor = 0

for fight in range(1, lost_fights_count + 1):
    if fight % 2 == 0:
        broken_helmets += 1
    if fight % 3 == 0:
        broken_swords += 1
    if fight % 6 == 0 and fight > 0:
        broken_shields += 1

for shield in range(1, broken_shields + 1):
    if shield % 2 == 0 and not shield == 0:
        broken_armor += 1

total_money = broken_shields * shield_price + broken_armor * armor_price + broken_swords * sword_price + broken_helmets * helmet_price

print(f"Gladiator expenses: {total_money:.2f} aureus")