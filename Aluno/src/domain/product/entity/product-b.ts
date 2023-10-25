import ProductInterface from "./product.interface";

export default class ProductB  implements ProductInterface {
    
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price * 2;
        this.validate();
    }

    get name(): string{
        return this._name;
    }

    get price(): number{
        return this._price;
    }

    get id(): string{
        return this._id;
    }

    changeName(newName: string){   
        this._name = newName;
        this.validate();
    }

    changePrice(newPrice: number) {
        this._price = newPrice;
        this.validate();
    }

    validate() {
        if(this._id.length === 0){
            throw new Error("Id is required");
        }

        if(this._name.length === 0){
            throw new Error("Name is required");
        }

        if(this._price < 0){
            throw new Error("Price is must be greater than zero");
        }
    }

}