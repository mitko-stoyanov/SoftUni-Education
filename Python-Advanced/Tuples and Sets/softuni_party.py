regular_guests = set()
vip_guests = set()
not_come = set()

n = int(input())

for _ in range(n):
    guest = input()
    if guest[0].isdigit():
        vip_guests.add(guest)
    else:
        regular_guests.add(guest)

command = input()
while not command == 'END':
    guest_num = command
    if guest_num in regular_guests:
        regular_guests.remove(guest_num)
    elif guest_num in vip_guests:
        vip_guests.remove(guest_num)
    command = input()

print(len(vip_guests) + len(regular_guests))
for person in sorted(vip_guests):
    print(person)
for person in sorted(regular_guests):
    print(person)