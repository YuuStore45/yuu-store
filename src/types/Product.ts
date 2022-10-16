export interface Product {
  title: string;
  id: string;
  price: number;
  images: {
    thumb: string;
    primary: string;
  };
  delivery: {
    free: boolean;
    value: number;
    days: number[];
  };
  description: {
    long: string;
    short: string;
  };
}
