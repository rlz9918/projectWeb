import logo from './logo.svg';
import './App.css';
import LabTabs from './components/common/navBar/navBar.jsx';
import MainPage from './pages/mainPage/mainPage';
import WovenImageList from './components/common/galery/galery';
import Footer from './pages/footer/footer';

function App() {
  return (
    <div className="App">
      <LabTabs></LabTabs>
      <MainPage></MainPage>
      <WovenImageList></WovenImageList>
      <Footer></Footer>
    </div>
  );
}

export default App;
