wanted_symbols = int(input())
a = '*'
for symbol in range(1, wanted_symbols + 1):
    print(symbol * a)
    if symbol == wanted_symbols:
        for reversed_symbol in range(wanted_symbols - 1, 0, -1):
            print(reversed_symbol * a)