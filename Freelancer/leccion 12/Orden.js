class Order {

    static idOrder = 0 
    static countOrders = 0
    static countProducts = 0
    static MAX_PRODUCT = 5

    constructor (idOrder, products, countProducts, countOrders, MAX_PRODUCT){

        this._products = products
        this._idOrder = ++Order.idOrder

    }

    get products(){return this._products}
    set products(products){return this._products = products}

    
}