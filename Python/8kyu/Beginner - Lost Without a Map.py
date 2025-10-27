# Description:
# --------------------------------------
# Given an array of integers, return a new array with each value doubled.

# For example:

# [1, 2, 3] --> [2, 4, 6]


# Solution:
# --------------------------------------
def maps(a):
    double_a = list()
    for num in a:
        double_a.append(num * 2)
    return double_a


# Alt Solution:
# --------------------------------------
def maps(a):
    return map(lambda x: x * 2, a)