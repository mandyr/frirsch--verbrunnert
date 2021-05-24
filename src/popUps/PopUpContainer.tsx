import { useState } from 'react';
import { listOfPopUps, PopUp } from './CollectionOfPopups';
import './PopupContainer.css';
import './PopUpWindow';
import { PopUpWindow } from './PopUpWindow';

export function PopupContainer(props: any) {
  const [renderedPopUps, setRenderedPopups] = useState(listOfPopUps);

  function closePopUp(indexToBeRemoved: number) {
    const newRenderedPopUps = renderedPopUps.slice(indexToBeRemoved - 1, 0);
    setRenderedPopups(newRenderedPopUps);
  }

  return (
    <div className="popUpContainer">
      {renderedPopUps.map((popUpWindow: PopUp, index: number) => {
        return (
          <PopUpWindow
            image={popUpWindow.image}
            id={popUpWindow.id}
            height={popUpWindow.height}
            width={popUpWindow.width}
            top={popUpWindow.top}
            left={popUpWindow.left}
            closePopUp={() => closePopUp(index)}
            key={`popUp-${popUpWindow.id}-${index}`}
          />
        );
      })}
    </div>
  );
}
