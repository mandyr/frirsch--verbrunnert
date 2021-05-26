import { useState } from 'react';
import { listOfPopUps, PopUp } from './CollectionOfPopups';
import './PopupContainer.css';
import './PopUpWindow';
import { PopUpWindow } from './PopUpWindow';

export function PopupContainer(props: any) {
  const [renderedPopUps, setRenderedPopups] = useState(
    listOfPopUps.slice(0, 2)
  );
  const [additionalPopupWasOpened, setAdditionalPopupWasOpened] =
    useState(false);

  function closePopUp(idToBeRemoved: string) {
    const newRenderedPopUps = renderedPopUps.filter(
      (popUp) => popUp.id !== idToBeRemoved
    );
    setRenderedPopups(newRenderedPopUps);
    openAdditionalPopup();
  }

  function openAdditionalPopup() {
    if (!additionalPopupWasOpened) {
      setRenderedPopups(renderedPopUps.concat([listOfPopUps[2]]));
      setAdditionalPopupWasOpened(true);
    }
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
            closePopUp={() => closePopUp(popUpWindow.id)}
            key={`popUp-${popUpWindow.id}-${index}`}
          />
        );
      })}
    </div>
  );
}
