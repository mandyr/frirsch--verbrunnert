export function Video(props: any) {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <p>Wir haben 1 nices video für euch gedreht</p>
      <iframe
        style={{
          width: '100%',
          height: '100%',
        }}
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
