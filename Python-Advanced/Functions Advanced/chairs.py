def generate_combinations(values, index, count, comb):
    if len(comb) == count:
        print(comb)
        return

    for i in range(index, len(values)):
        comb.append(values[i])
        generate_combinations(values, i + 1, count, comb)
        comb.pop()


generate_combinations(['p', 'g', 'a', 'x'], 0, 3, [])