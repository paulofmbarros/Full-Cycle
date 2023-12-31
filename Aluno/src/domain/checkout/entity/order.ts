import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }  

    get id(): string {
        return this._id;
    }

    get customerId(): string {
        return this._customerId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    validate() {
        if(this._id.length === 0){
            throw new Error("Id is required"); 
        }

        if(this._customerId.length === 0){
            throw new Error("CustomerId is required");
        }

        if(this._items.length === 0){
            throw new Error("Item quantity must be greater than zero");
        }

        if(this._items.some(item => item.quantity <= 0)){
            throw new Error("Item quantity must be greater than zero");
        }

        return true;
    }

    addItems(items: OrderItem[]): void {

        if(this._items.length === 0 || this._items.some(item => item.quantity <= 0)){
            throw new Error("Item quantity must be greater than zero");
        }
        
        this._items.push(...items);
    }

    removeItem(item: OrderItem): void {
        const index = this._items.findIndex(i => i.id === item.id);
        if(index >= 0)
            this._items.splice(index, 1);
        else
            throw new Error("Item not found");
    }

    removeItems(items: OrderItem[]): void {
        items.forEach(item => this.removeItem(item));
    }

    clearOrderItems(): void {
        this._items = [];
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
    }
}


