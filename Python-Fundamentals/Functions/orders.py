def sum_products(p, q):
    sum = 0
    price = 0
    if p == 'coffee':
        price = 1.5
    elif p == 'coke':
        price = 1.4
    elif p == 'water':
        price = 1
    elif p == 'snacks':
        price = 2
    sum = price * q
    return sum

product_type = input()
quantity = int(input())

print(f'{sum_products(product_type, quantity):.2f}')