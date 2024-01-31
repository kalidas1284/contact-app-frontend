import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Add from './Components/Add';
import View from './Components/View';
import PageNotFound from './Components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import ViewProfile from './Components/ViewProfile';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
  

      
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='add'  element={<Add/>}/>
    <Route path='view' element={<View/>}/>
    <Route path='edit/:id' element={<Edit/>}/>
    <Route path='profile/:id' element={<ViewProfile/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  
</Routes>
      
      

   <Footer/>
     
    </div>
  );
}

export default App;
