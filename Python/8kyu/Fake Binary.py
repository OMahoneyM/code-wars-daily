# Description:
# --------------------------------------
# Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# Note: input will never be an empty string


# Solution:
# --------------------------------------
def fake_bin(x):
    result = list()
    for num in x:
        if int(num) < 5:
            result.append("0")
        else:
            result.append("1")
    return "".join(result)

print(fake_bin("45"), "01")


# Alt Solution:
# --------------------------------------
def fake_bin(x):
    return ''.join('0' if num < '5' else '1' for num in x)