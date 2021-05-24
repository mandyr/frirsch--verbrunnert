import React, { useState } from 'react';
import { NavBar } from './navbar/Navbar';
import { Viewer } from './contentViewer/Viewer';
import { Gaestebuch } from './contentViewer/Gaestebuch';
import { Video } from './contentViewer/Video';
import { Home } from './contentViewer/Home';
import { PopupContainer } from './popUps/PopUpContainer';

function App() {
  const pages = ['Home', 'Video', 'Gästebuch'];

  const [currentPage, setCurrentPage] = useState('Home');

  function navigateToPage(name: string) {
    setCurrentPage(name);
  }

  function renderCurrentPage() {
    if (currentPage === 'Gästebuch') {
      return <Gaestebuch />;
    }

    if (currentPage === 'Video') {
      return <Video />;
    }

    return <Home />;
  }

  return (
    <div className="App">
      <NavBar items={pages} navigateToPage={navigateToPage}></NavBar>
      <Viewer>{renderCurrentPage()}</Viewer>
      <PopupContainer />
    </div>
  );
}

export default App;
