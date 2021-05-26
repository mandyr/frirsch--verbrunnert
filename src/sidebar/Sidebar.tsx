import { px } from '../popUps/PopUpWindow';
import schweinkram from '../popUps/schweinkram.gif';
import './Sidebar.css';

export function SideBar() {
  return (
    <div className="sideBar">
      <img style={{ width: px(300) }} src={schweinkram} alt="schweinkram"></img>
    </div>
  ); 
}
