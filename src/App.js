import './styles/homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'; 

import CreateAccount from './pages/createAccount';
import LogIn from './pages/logIn';
import Quiz from './pages/Quiz/FoodPtOne'
import Dashboard from './pages/Dashboard/dashboard';
import CarbonFootprint from './pages/CarbonFootprint/carbonFootpring';
import EducationalContent from './pages/EducationalContent/educationalContent';
import EcoFriendlyBrands from './pages/Eco-friendly-brands/ef-FriendlyBrands';
import Home from './pages/Home';

function App() {
  return (
      
  <>
  

  <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = 'createAccount' element  = {<CreateAccount /> }></Route>
        <Route path = 'LogIn' element  = {<LogIn /> }></Route>
        <Route path = 'Quiz' element  = {<Quiz /> }></Route>
        <Route path = 'Dashboard' element = {<Dashboard/>}>
          <Route path='ecofriendlybrands' element = {<EcoFriendlyBrands/>}></Route>
        </Route>
        <Route path = 'CarbonFootprint' element = {<CarbonFootprint />}></Route>
        <Route path= 'Ecofriendlybrands' element = {<EcoFriendlyBrands/>}></Route>
        <Route path= 'EducationalContent' element = {<EducationalContent/>}></Route>
  </Routes>




  </>
     
  );
}

export default App;
















