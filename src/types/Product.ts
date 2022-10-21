export interface Product {
  title: string;
  id: string;
  price: {
    value: number;
    withDiscount: number;
  };
  hasDiscount: boolean;
  images: {
    thumb: string;
    primary: string;
    attachments?: string[];
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
  variants?: {
    label: string;
    options: {
      label: string;
      image: string;
    }[];
  }[];
  category: string;
  rating: number;
}
