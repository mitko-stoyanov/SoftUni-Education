def stock_availability(all_boxes, command_type, *args):
    boxes = all_boxes
    command = command_type
    if command == 'delivery':
        for product in args:
            boxes.append(product)
    elif command == 'sell':
        if not args:
            boxes.pop(0)
        elif type(args[0]) == int:
            current_num = args[0]
            counter = 0
            while boxes:
                if counter == current_num:
                    break
                boxes.pop(0)
                counter += 1
        elif len(args) >= 1:
            for element in args:
                if element in boxes:
                    while element in boxes:
                        boxes.remove(element)

    return boxes


print(stock_availability(["choco", "vanilla", "banana"], "delivery", "caramel", "berry"))