from collections import deque

orders = deque(input().split(', '))
employees = [int(x) for x in input().split(', ')]
pizzas_made = 0

while orders and employees:
    first_order = int(orders.popleft())
    if not 1 <= first_order <= 10:
        continue
    employee = employees.pop()

    if first_order <= employee:
        pizzas_made += first_order
    if first_order > employee:
        remaining_pizzas = first_order - employee
        pizzas_made += employee
        orders.appendleft(str(remaining_pizzas))

if orders:
    print('Not all orders are completed.')
    print(f'Orders left: {", ".join([str(x) for x in orders])}')
else:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    print(f'Employees: {", ".join([str(x) for x in employees])}')