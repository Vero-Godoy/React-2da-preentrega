import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import PageNotFound from './componentes/PageNotFound';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ContactUs from './componentes/ContactUs';
import Firestore from './componentes/Firestore';


import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavBar/>}>  
                <Route index element={<Home/>} />
                <Route path='itemlistcontainer' element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/products/:categoryId" element={<ItemListContainer />} />
                <Route path='contactus' element={<ContactUs/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}



export default App;



