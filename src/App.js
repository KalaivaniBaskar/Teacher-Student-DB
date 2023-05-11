import './App.css';
import Header from './Components/Header/index';
import { DataProvider } from  './Components/Context';
import { Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Layout from './Components/Layout';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import Edit from './Components/Edit';

function App() {

 
  return (
    <div className="App">

    <DataProvider> 
      <Header />
      
      <Routes>
        <Route path="/" element={ <Admin /> } ></Route>
        <Route path="/dashboard" element={ <Dashboard /> } ></Route>
        <Route path="/layout/:category" element={ <Layout /> } ></Route>
        <Route path="/profile/:id" element={ <Profile /> } ></Route>
        <Route path="/edit/:id" element={ <Edit /> } ></Route>
      </Routes>

    </DataProvider>

    </div>
  );
}

export default App;
