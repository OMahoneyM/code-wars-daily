# Description:
# --------------------------------------
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
# Example (Input => Output):

# 35231 => [1,3,2,5,3]
# 0     => [0]


# Solution:
# --------------------------------------
def digitize(n):
    lst = list(map(int, str(n)))
    return lst[::-1]

print(digitize(12345), [5,4,3,2,1])


# Alt Solution:
# --------------------------------------
def digitize(n):
    return list(map(int, reversed(str(n))))

print(digitize(12345), [5,4,3,2,1])
print(digitize(12435), [5,3,4,2,1])
