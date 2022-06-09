import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import IceCream from './components/IceCream';
import Cake from './components/Cake';

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
      </div>
    </>
  );
}

export default App;
