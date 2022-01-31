data = input()
products = {}

while not data == 'statistics':
    product_name, product_quantity = data.split(': ')
    if product_name in products:
        products[product_name] += int(product_quantity)
    else:
        products[product_name] = int(product_quantity)
    data = input()
print('Products in stock:')
for key, value in products.items():
    print(f'- {key}: {value}')

print(f'Total Products: {len(products)}')
print(f'Total Quantity: {sum(products.values())}')