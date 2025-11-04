# Description:
# --------------------------------------
# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

# [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
# [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
# [] --> []

# You can assume that all values are integers. Do not mutate the input array.


# Solution:
# --------------------------------------
def invert(lst):
    result = list()
    
    for i in lst:
        result.append(-i)
    
    return result


# Alt Solution:
# --------------------------------------
def invert(lst):
    return [-x for x in lst]