import logo from './logo.svg';
import './App.css';
//import LabTabs from './components/common/navBar/navBar.jsx';
import MainPage from './pages/mainPage/mainPage';
import WovenImageList from './components/common/galery/galery';
import Footer from './pages/footer/footer';
import Player from './pages/videoPlayerPage/player';
import { createRef } from 'react';
import ResponsiveAppBar from './components/common/navBar2/navBar.jsx';
import AboutMe from './pages/acercaDe/AcercaDe';

function App() {
  const galeryRef = createRef()
  const inicio = createRef()
  const newContent = createRef()
  const aboutMe = createRef()
  const newsLetter = createRef()
  return (
    <div className="App">
      <ResponsiveAppBar 
        inicio={inicio} 
        galeryRef={galeryRef}
        newContent = {newContent}
        aboutMe = {aboutMe}
        newsLetter = {newsLetter}
        ></ResponsiveAppBar>
      <MainPage reference = {inicio}></MainPage>
      <WovenImageList reference = {galeryRef}></WovenImageList>
      <Player reference = {newContent}></Player>
      <AboutMe reference = {aboutMe}></AboutMe>
      <Footer reference = {newsLetter}></Footer>
    </div>
  );
}

export default App;
