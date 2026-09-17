def reverse_integer(x):
    """Return x with its decimal digits reversed, or 0 on 32-bit overflow."""
    int_max = 2**31 - 1
    int_min = -2**31
    sign = -1 if x < 0 else 1
    x = abs(x)
    reversed_number = 0

    while x != 0:
        last_digit = x % 10
        reversed_number = reversed_number * 10 + last_digit
        x //= 10

    reversed_number *= sign
    if reversed_number > int_max or reversed_number < int_min:
        return 0

    return reversed_number


print(reverse_integer(123))
print(reverse_integer(-456))
print(reverse_integer(1534236469))