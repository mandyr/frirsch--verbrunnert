export function Marquee(props: { text: string }) {
  return (
    <p className="marquee">
      <span>{props.text}</span>
    </p>
  );
}
