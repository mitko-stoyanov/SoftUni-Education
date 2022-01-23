nums = input().split(', ')
nums = [int(x) for x in nums]

print([index for index in range(len(nums)) if nums[index] % 2 == 0])