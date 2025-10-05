# Description:
# --------------------------------------
# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
# Examples

# make_negative(1);  # return -1
# make_negative(-5); # return -5
# make_negative(0);  # return 0

# Notes

#     The number can be negative already, in which case no change is required.
#     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


# Solution:
# --------------------------------------
def make_negative( number ):
    return number if number < 1 else number * -1

print(make_negative(0), 0)
print(make_negative(10), -10)
print(make_negative(-10), -10)


# Alt Solution:
# --------------------------------------
def make_negative( number ):
    return -abs(number)

print(make_negative(0), 0)
print(make_negative(10), -10)
print(make_negative(-10), -10)
