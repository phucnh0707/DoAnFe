export class Product{
    id: number;
    proName: string;
    price:string;
    image:string;
    quantity:number;
    catId:number;

    constructor(id: number,proName: string,price:string,image:string,quantity:number,catId:number){
        this.id = id;
        this.proName = proName;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.catId = catId;

    }
    


}