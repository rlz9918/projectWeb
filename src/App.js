import logo from './logo.svg';
import './App.css';
import LabTabs from './components/common/navBar/navBar.jsx';
import MainPage from './pages/mainPage';
import WovenImageList from './components/common/galery/galery';

function App() {
  return (
    <div className="App">
      <LabTabs></LabTabs>
      <MainPage></MainPage>
      <WovenImageList></WovenImageList>
    </div>
  );
}

export default App;
