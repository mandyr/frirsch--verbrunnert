import './Navbar.css';

export interface NavbarProps {
  items: string[];
  navigateToPage(page: string): void;
}

export function NavBar(props: NavbarProps) {
  return (
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
  );
}
