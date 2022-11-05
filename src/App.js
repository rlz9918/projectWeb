import logo from './logo.svg';
import './App.css';
import LabTabs from './components/common/navBar.jsx';
import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <LabTabs></LabTabs>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
