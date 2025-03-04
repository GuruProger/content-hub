import re


def camel_to_snake(camel_case_string):
    # Replace patterns where a lowercase/number is followed by an uppercase
    snake_case_string = re.sub(r'(.)([A-Z][a-z]+)', r'\1_\2', camel_case_string)
    # Handle cases where an uppercase is followed by another uppercase and a lowercase
    snake_case_string = re.sub(r'([a-z0-9])([A-Z])', r'\1_\2', snake_case_string)
    return snake_case_string.lower()