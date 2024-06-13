import { OrderProduct } from "./order-product";
import { Product } from "./product";

export class Order {
    public id !: number;
    public customerId !: number;
    public detailsOrder !: OrderProduct[];
}

export { OrderProduct };
