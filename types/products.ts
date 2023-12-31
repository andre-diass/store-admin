export default interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: string;
  userId: string;
  imageLinks: Array<string>;
  createdAt: Date;
  productId: string;
  category: string;
}
