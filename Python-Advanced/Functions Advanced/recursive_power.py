def recursive_power(base, exponent):
    if exponent == 1:
        return base
    return base * recursive_power(base, exponent - 1)