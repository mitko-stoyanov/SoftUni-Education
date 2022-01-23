words = input().split()
searched_word = input()

palindromes = [el for el in words if el == el[::-1]]
print(palindromes)
print(f'Found palindrome {palindromes.count(searched_word)} times')