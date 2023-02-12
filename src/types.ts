export type Plans =  "Arcade" | "Advanced" | "Pro";

export interface PlansData {
  id: number,
  planName: Plans,
  imgSrc: string,
  price: number
}

export interface AddOnsData {
  id: number;
  title: string;
  subtitle: string;
  price: number;
}