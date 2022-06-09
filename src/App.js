import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import IceCream from './components/IceCream';
import Cake from './components/Cake';
import FetchUser from './components/FetchUser';

function App() {
  return (
    <>
      <div className="App">
        <Profile/>
        <Login/>
        <ChangeColor/>
      </div>
      <div>
        <Cake/>
        <IceCream/>
        <FetchUser/>
      </div>
    </>
  );
}

export default App;
