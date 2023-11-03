import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Recipes from './components/Recipes';
import Header from './components/Header';



// function Layout(){
//   return (
//     <>
//       <Navbar/>
//         <Outlet/>
        
//       <Footer/>
//     </>
//   )
// }
function App() {
  return (
    <div className='bg-black'>
       <Navbar/>
      <Routes>
       
        {/* <Route path='/' element={}> */}
          <Route index element={<Home />} />
          <Route path='/recipes' element={<Recipes/>} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        {/* </Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
