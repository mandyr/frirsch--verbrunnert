import { Marquee } from "./Marquee"
import welcome from "../popUps/welcome.gif";

export function Home(props: any) {
  return (
    <div className="home"> 
      <h1>Willkommen bei frisch-verbrunnert</h1>
      <img src={welcome} alt="welcome to my crib"></img>
      <p>In meiner kleinen Ecken im WWW gibt es viel zu entdecken!</p>
      <Marquee text={"Wir wünschen alles, alles gute zur Hochzeit!!!"} />
    </div>
  );
}
