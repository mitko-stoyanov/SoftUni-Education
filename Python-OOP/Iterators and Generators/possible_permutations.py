from itertools import permutations


def possible_permutations(nums):
    for permutation in permutations(nums):
        yield list(permutation)