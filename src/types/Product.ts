export interface Product {
  title: string;
  id: string;
  price: number;
  description: {
    long: string;
    short: string;
  };
  image: string;
}
