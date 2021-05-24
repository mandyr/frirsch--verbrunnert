import { PopUp } from './CollectionOfPopups';
import './PopupContainer.css';
import 'xp.css/dist/XP.css';
import { useState } from 'react';

export function px(pixel: number): string {
  return `${pixel}px`;
}

export interface PopUpWindowProps extends PopUp {
  closePopUp(): void;
}

export function PopUpWindow(props: PopUpWindowProps) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  let dragging: boolean = false;

  function startDrag(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    dragging = true;
    document.addEventListener('mousemove', dragWindow);
    document.addEventListener('mouseup', endDrag);
  }

  function dragWindow(event: MouseEvent) {
    if (dragging) {
      event.preventDefault();
      event.stopPropagation();
      const deltaY = event.clientY - props.width / 100;
      const deltaX = event.clientX - props.height / 2;
      setTop(deltaY);
      setLeft(deltaX);
    }
  }

  function endDrag(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    document.removeEventListener('mousemove', dragWindow);
    document.removeEventListener('mouseup', endDrag);
    dragging = false;
  }

  return (
    <div
      className="popUp"
      style={{
        top: top ? px(top) : px(props.top),
        left: left ? px(left) : px(props.left),
        width: px(props.width + 16),
        height: px(props.height + 16),
      }}
    >
      <div className="window">
        <div className="title-bar" onMouseDown={startDrag}>
          <div className="title-bar-text">Werbung</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={props.closePopUp} />
          </div>
        </div>

        <div className="window-body">
          <img
            src={props.image}
            alt={props.id}
            style={{
              width: px(props.width),
              height: px(props.height),
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
