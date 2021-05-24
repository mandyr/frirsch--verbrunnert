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
    height: window.screen.width / 1000 * 631,
    width: window.screen.width / 1000 * 640,
    top: window.screen.width / 1000 * 50,
    left: window.screen.width / 1000 * 160,
  },
  {
    image: PoliceStripper,
    id: 'policeStripers',
    height: window.screen.width / 1000 * 400,
    width: window.screen.width / 1000 * 600,
    top: window.screen.width / 1000 * 80,
    left: window.screen.width / 1000 * 60,
  },
  {
    image: Fragen,
    id: 'fragen',
    height: window.screen.width / 1000 * 300,
    width: window.screen.width / 1000 * 300,
    top: window.screen.width / 1000 * 100,
    left: window.screen.width / 1000 * 100,
  }
];
