
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategoria'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
    <ToastContainer />
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[70vh]">
            <Routes>              
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>}/>
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App