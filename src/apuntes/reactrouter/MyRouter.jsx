//npm install react-router-dom
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Contador7 from '../components/Contador7'
import UseEffectComp from '../hooks/UseEffectComp'
import MyContext from '../context/MyContext'
import MyQueryClientProvider from '../reactquery/MyQueryClientProvider'

export default function MyRouter() {
    return (
        <BrowserRouter>
            <div className='flex flex-col justify-center items-center gap-1'>
                <Link to='/'>Home</Link>
                <Link to='/UseEffect'>UseEffect</Link>
                <Link to='/Contador/0'>Contador</Link>
                <Link to='/Context'>Context</Link>
                <Link to='/ReactQuery'>React Query</Link>
            </div>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/UseEffect' element={<UseEffectComp></UseEffectComp>}></Route>
                <Route path='/Contador/:n' element={<Contador7></Contador7>}></Route>
                <Route path='/Context' element={<MyContext></MyContext>}></Route>
                <Route path='/ReactQuery' element={<MyQueryClientProvider></MyQueryClientProvider>}></Route>
            </Routes>
        </BrowserRouter>
    )
}