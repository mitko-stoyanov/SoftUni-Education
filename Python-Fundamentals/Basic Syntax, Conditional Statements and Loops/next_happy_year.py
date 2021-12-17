current_year = int(input())
while True:
    current_year += 1
    if len(set(str(current_year))) == len(str(current_year)):
        print(current_year)
        break
