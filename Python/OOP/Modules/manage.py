import store
import product

if __name__ == "__main__": # if this file was called directly and not by an importing file. use this to only export the classes from a file, for class files (which this is not)
    products = [product.Product(100, "monitor", "acer", 20), product.Product(50, "shoes", "nike", 20), product.Product(2, "soda", "pepsi", 0.2), product.Product(12000, "car", "chevrolet", 7000)]
    tienda = store.Store(products, "McLean, VA", "Zee Dubs")
    tienda.inventory()
    tienda.add_product(product.Product(900, "computer", "lenovo", 400))
    tienda.inventory()
    tienda.remove_product("soda")
    tienda.inventory()