# Description:
# --------------------------------------
# This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


# Solution:
# --------------------------------------
def simple_multiplication(number) :
    if number % 2:
        return number * 9
    else:
        return number * 8
    

# Alt Solution:
# --------------------------------------
def simple_multiplication(number) :
    return number * (8 + number % 2)