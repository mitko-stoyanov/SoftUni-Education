def read_matrix():
    n, m = [int(x) for x in input().split(', ')]
    matrix = []
    for _ in range(n):
        row = [int(x) for x in input().split(', ')]
        matrix.append(row)
    return matrix


matrix = read_matrix()
n = len(matrix)
m = len(matrix[0])
the_sum = 0

for row_index in range(n):
    row = matrix[row_index]
    the_sum += sum(row)

print(the_sum)
print(matrix)
