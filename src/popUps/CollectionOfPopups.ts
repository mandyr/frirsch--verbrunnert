import Singles from './singles.jpg';

export interface PopUp {
  image: string;
  id: string;
  width: number;
  height: number;
  top: number;
  left: number;
}

export const listOfPopUps: PopUp[] = [
  {
    image: Singles,
    id: 'sexySingles',
    height: 631,
    width: 640,
    top: 200,
    left: 500,
  },
];
