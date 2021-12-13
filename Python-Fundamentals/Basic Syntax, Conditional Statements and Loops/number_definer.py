a = float(input())

if a == 0:
    print('zero')
elif a < 0 and abs(a) < 1:
    print('small negative')
elif a < 0 and abs(a) > 1000000:
    print('large negative')
elif a < 0 and 1 < abs(a) < 1000000:
    print('negative')
elif a > 0 and abs(a) < 1:
    print('small positive')
elif a > 0 and abs(a) > 1000000:
    print('large positive')
elif a > 0 and 1 < abs(a) < 1000000:
    print('positive')
