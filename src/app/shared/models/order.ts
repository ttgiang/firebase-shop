import { ShoppingCart } from "./shopping-cart";

export class Order {
  totalPaid: number;
  datePlaced: number;
  items: any[];

  constructor(
    public userId: string,
    public shipping: any,
    shoppingCart: ShoppingCart
  ) {
    this.datePlaced = new Date().getTime();
    this.totalPaid = 0;
    this.items = shoppingCart.items.map((i) => {
      this.totalPaid += i.totalPrice;
      return {
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price,
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice,
      };
    });
  }
}
