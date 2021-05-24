import { px } from '../popUps/PopUpWindow';

export function Gaestebuch(props: any) {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'scroll',
      }}
    >
      <iframe
        width={px(1500)}
        height="100%"
        frameBorder="0"
        src="http://50643.my-gaestebuch.de"
        title="Gästebuch"
        scrolling="auto"
        allowTransparency={true}
      ></iframe>
    </div>
  );
}
