import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Planets from './pages/Planets';
import Starships from './pages/Starships';
import Home from './pages/Home';
import Header from './Header';
import Error from './Error';
import Starship from './pages/Starship';

export default function Router() {
    return (
        <BrowserRouter>
            <Header title='StarDB' 
             props={[
                { name: 'Starships', link: '/starships'}, 
                { name: 'Planets', link: '/planets'}
            ]}
             />
            <Routes>
                <Route exact path='/starships' element={<Starships />} />
                <Route exact path='/starships/:id' element={<Starship />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error message={'Error 404'} />} />
            </Routes>
        </BrowserRouter>
    )
}
