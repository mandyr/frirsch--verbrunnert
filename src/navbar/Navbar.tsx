import './Navbar.css';
import feuerwerk from '../popUps/feuerwerk.gif';

export interface NavbarProps {
  items: string[];
  navigateToPage(page: string): void;
}

export function NavBar(props: NavbarProps) {
  return (
    <div className="navBarContainer">
        <img className="feuerwerk" src={feuerwerk} alt="feuerwerk" />
        <ul className="navBar">
          {props.items.map((item: string) => {
            return (
              <li key={item} className="navBarItem" id={item}>
                <button
                  className="navBarButton"
                  onClick={() => props.navigateToPage(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <img className="feuerwerk" src={feuerwerk} alt="feuerwerk" />
    </div>
  );
}
