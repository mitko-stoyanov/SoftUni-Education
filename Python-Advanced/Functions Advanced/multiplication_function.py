def multiply(*args):
    if not args:
        return None
    product = 1
    for x in args:
        product *= x
    return product


print(multiply(1, 4, 5))