def get_magic_triangle(n: int):
    rows = n
    matrix = [[1], [1, 1]]

    for row in range(2, rows):
        needed_nums = row + 1
        # current_row = [1] + [x for x in range(1, needed_nums - 1)] + [1]
        # matrix.append(current_row)
        current_row = []
        if not len(current_row) == needed_nums:
            for i in range(1, needed_nums - 1):
                current_num = matrix[row - 1][i - 1] + matrix[row - 1][i]
                current_row.append(current_num)
        current_row = [1] + current_row + [1]
        matrix.append(current_row)
    return matrix


print(get_magic_triangle(5))