# Description:
# --------------------------------------
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


# Solution:
# --------------------------------------
def even_or_odd(number):
    if (number % 2 == 0):
        return "Even"
    else:
        return "Odd"

print(even_or_odd(4), "Even")
print(even_or_odd(3), "Odd")


# Alt Solution:
# --------------------------------------
def even_or_odd(n):
    return "Odd" if n % 2 else "Even"

print(even_or_odd(4), "Even")
print(even_or_odd(3), "Odd")
