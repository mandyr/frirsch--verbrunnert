import React, { useState } from 'react';
import { NavBar } from './navbar/Navbar';
import { Viewer } from './contentViewer/Viewer';
import { Gaestebuch } from './contentViewer/Gaestebuch';
import { Video } from './contentViewer/Video';
import { Home } from './contentViewer/Home';
import { PopupContainer } from './popUps/PopUpContainer';
import { SideBar } from './sidebar/Sidebar';

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
        <div className="mainContent">
          <NavBar items={pages} navigateToPage={navigateToPage}></NavBar>
          <Viewer>{renderCurrentPage()}</Viewer>
        </div>
        <SideBar />
        <PopupContainer />
      </div>
  );
}

export default App;
