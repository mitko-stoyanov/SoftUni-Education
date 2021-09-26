def read_matrix():
    m = int(input())
    matrix = []
    for _ in range(m):
        row = [int(x) for x in input().split(', ')]
        matrix.append(row)
    return matrix


matrix = read_matrix()

even_matrix = []
for row in matrix:
    only_even = [x for x in row if x % 2 == 0]
    even_matrix.append(only_even)

print(even_matrix)