#REMEMBER TO PSEUDOCODE
def pad(array, min_size, value = None):
    new_list = array

    while len(new_list) < min_size:
        new_list.append(value)
        min_size -= 1
    
    return new_list




