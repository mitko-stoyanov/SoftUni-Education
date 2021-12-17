budget = float(input())
price_per_kilo_flour = float(input())

colored_eggs_counter = 0
price_eggs = 0.75 * price_per_kilo_flour
price_milk = 1.25 * price_per_kilo_flour / 4
counter_cozonacs = 0

price_per_cozonac = price_milk + price_eggs + price_per_kilo_flour
while budget >= price_per_cozonac:
    budget -= price_per_cozonac
    counter_cozonacs += 1
    colored_eggs_counter += 3
    if counter_cozonacs % 3 == 0:
        colored_eggs_counter -= counter_cozonacs - 2

print(f"You made {counter_cozonacs} cozonacs! Now you have {colored_eggs_counter} eggs and {budget:.2f}BGN left.")