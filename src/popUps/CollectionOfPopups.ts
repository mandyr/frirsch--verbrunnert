import Singles from './singles.jpg';
import PoliceStripper from './PoliceStripper.png'

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
  {
    image: PoliceStripper,
    id: 'policeStripers',
    height: 600,
    width: 800,
    top: 200,
    left: 500,
  }
];
