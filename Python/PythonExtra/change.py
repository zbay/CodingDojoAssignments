def change(cents):
    coins = {'dollars': 0, 'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0}
    while cents > 0:
        if cents % 100 == 0:
            coins['dollars'] += 1
            cents -= 100
        elif cents % 25 == 0:
            coins['quarters'] += 1
            cents -= 25
        elif cents % 10 == 0:
            coins['dimes'] += 1
            cents -= 10
        elif cents % 5 == 0:
            coins['nickels'] += 1
            cents -= 5
        else:
            coins['pennies'] += 1
            cents -= 1
        
    return coins

print change(107)
print change(12)
print change(58)