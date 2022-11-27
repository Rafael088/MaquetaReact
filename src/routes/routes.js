import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Concact';

import Home from '../pages/Home';
function Routers() {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<>Not Found</>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default Routers;