import logo from './logo.svg';
import './App.css';
import LabTabs from './components/common/navBar/navBar.jsx';
import MainPage from './pages/mainPage/mainPage';
import WovenImageList from './components/common/galery/galery';
import Footer from './pages/footer/footer';
import Player from './pages/videoPlayerPage/player';
import { createRef } from 'react';

function App() {
  const galeryRef = createRef()
  const inicio = createRef()
  const newContent = createRef()
  const newsLetter = createRef()
  return (
    <div className="App">
      <LabTabs 
        inicio={inicio} 
        galeryRef={galeryRef}
        newContent = {newContent}
        newsLetter = {newsLetter}
        ></LabTabs>
      <MainPage reference = {inicio}></MainPage>
      <WovenImageList reference = {galeryRef}></WovenImageList>
      <Player reference = {newContent}></Player>
      <Footer reference = {newsLetter}></Footer>
    </div>
  );
}

export default App;
