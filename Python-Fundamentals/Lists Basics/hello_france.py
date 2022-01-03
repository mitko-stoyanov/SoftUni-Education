items_list = input().split("|")
budget = int(input())
new_prices = []
total_profit = 0
for element in items_list:
    items_info = element.split("->")
    if budget <= 0 or budget < float(items_info[1]):
        continue
    if items_info[0] == "Clothes" and float(items_info[1]) <= 50.00:
        budget -= float(items_info[1])
        new_price = 1.40 * float((items_info[1]))
        new_prices.append(new_price)
        total_profit += new_price - float(items_info[1])
    elif items_info[0] == "Shoes" and float(items_info[1]) <= 35.00:
        budget -= float(items_info[1])
        new_price = 1.40 * float((items_info[1]))
        new_prices.append(new_price)
        total_profit += new_price - float(items_info[1])
    elif items_info[0] == "Accessories" and float(items_info[1]) <= 20.50:
        budget -= float(items_info[1])
        new_price = 1.40 * float((items_info[1]))
        new_prices.append(new_price)
        total_profit += new_price - float(items_info[1])


print(' '.join([f'{x:.2f}' for x in new_prices]))
print(f'Profit: {total_profit:.2f}')

for price in new_prices:
    budget += price
if budget >= 150:
    print("Hello, France!")
else:
    print("Time to go.")