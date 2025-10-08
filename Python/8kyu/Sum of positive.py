# Description:
# --------------------------------------
# Task

# You get an array of numbers, return the sum of all of the positives ones.
# Example

#     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

# Note

# If there is nothing to sum, the sum is default to 0.


# Solution:
# --------------------------------------
def positive_sum(arr):
    sum = 0
    
    for val in arr:
        if val >= 0:
            sum += val
    
    return sum

print(positive_sum([1,2,3,4,-5]), 10)

# Alt Solution:
# --------------------------------------
def positive_sum(arr): 
    return sum(x for x in arr if x > 0)

print(positive_sum([1,2,3,4,-5]), 10)
