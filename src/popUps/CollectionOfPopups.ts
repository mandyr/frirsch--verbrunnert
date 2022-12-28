import Singles from './singles.jpg';
import PoliceStripper from './PoliceStripper.png'
import Fragen from './3Fragen.png'

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
    top: 50,
    left: 160,
  },
  {
    image: PoliceStripper,
    id: 'policeStripers',
    height: 400,
    width: 600,
    top: 80,
    left: 60,
  },
  {
    image: Fragen,
    id: 'fragen',
    height: 300,
    width: 300,
    top: 100,
    left: 100,
  }
];
