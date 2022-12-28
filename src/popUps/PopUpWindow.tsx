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

  function getWidth(): number {
    return (window.screen.width / 1000) * props.width;
  }

  function getHeight(): number {
    return (window.screen.width / 1000) * props.height;
  }

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

  const leftPosition = left
    ? px(left)
    : px((window.screen.width / 1000) * props.left);
  const topPosition = top
    ? px(top)
    : px((window.screen.width / 1000) * props.top);

  return (
    <div
      className="popUp"
      style={{
        top: topPosition,
        left: leftPosition,
        width: px(getWidth() + 16),
        height: px(getHeight() + 16),
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
              width: px(getWidth()),
              height: px(getHeight()),
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}
