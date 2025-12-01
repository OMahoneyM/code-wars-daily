# Description:
# --------------------------------------
# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.


# Solution:
# --------------------------------------
def get_count(sentence):
    count = 0
    
    for letter in sentence:
        if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
            count += 1
        else:
            continue
    
    return count


# Alt Solution:
# --------------------------------------
def get_count(sentence):
    count = 0
    
    for letter in sentence:
        if letter in 'aeiou':
            count += 1
    
    return count