import downloadButton from "./download-button.jpg";

export function Video(props: any) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <p>Wir haben 1 nices video für euch gedreht</p>
      <a download href="/video/video.mp4"><img style={{ width: "20%"}}src={downloadButton} alt="Hier Downloaden!"/></a>

    </div>
  );
}
