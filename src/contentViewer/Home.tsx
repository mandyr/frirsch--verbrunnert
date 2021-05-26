import { Marquee } from "./Marquee"

export function Home(props: any) {
  return (
    <>
      <h1>Willkommen bei frisch-verbrunnert</h1>
      <p>In meiner kleinen Ecken im WWW gibt es viel zu entdecken!</p>
      <Marquee text={"Wir wünschen alles, alles gute zur Hochzeit!!!"} />
    </>
  );
}
