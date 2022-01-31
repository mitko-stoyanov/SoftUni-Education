data = input().split()
searched_products = input().split()
products = {}

for index in range(0, len(data), 2):
    key = data[index]
    value = int(data[index + 1])
    products[key] = value
for s_p in searched_products:
    if s_p in products:
        print(f'We have {products[s_p]} of {s_p} left')
    else:
        print(f"Sorry, we don't have {s_p}")