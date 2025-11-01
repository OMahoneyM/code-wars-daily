# Description:
# --------------------------------------
# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F


# Solution:
# --------------------------------------
def abbrev_name(name):
    first_name = name.split(' ')[0].upper()
    last_name = name.split(' ')[1].upper()
    return f'{first_name[0]}.{last_name[0]}'


# Alt Solution:
# --------------------------------------
def abbrev_name(name):
    first, last = name.upper().split(' ')
    return f'{first[0]}.{last[0]}'