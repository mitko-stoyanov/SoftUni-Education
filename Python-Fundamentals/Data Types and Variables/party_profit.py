from math import floor

party_size = int(input())
days = int(input())
coins_counter = 0

for day in range(1, days + 1):
    if day % 10 == 0:
        party_size -= 2
    if day % 3 == 0 and day % 5 == 0:
        party_size += 5
    coins_counter += 50 - party_size * 2
    if day % 3 == 0:
        coins_counter -= party_size * 3
    if day % 5 == 0:
        coins_counter += party_size * 20
        if day % 3 == 0:
            coins_counter -= party_size * 2

coins_each = int(coins_counter / party_size)
print(f"{party_size} companions received {floor(coins_each)} coins each.")