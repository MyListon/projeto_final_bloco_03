
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
import ListaProdutos from './components/produtos/listaproduto/ListaProdutos'
import FormProduto from './components/produtos/formproduto/FormProduto'
import DeletarProduto from './components/produtos/deletaproduto/DeletarProduto'

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
              <Route path="/produtos" element={<ListaProdutos/>}/>
              <Route path="/cadastrarproduto" element={<FormProduto/>}/>
              <Route path="/editarproduto/:id" element={<FormProduto/>}/>
              <Route path="/deletarproduto/:id" element={<DeletarProduto/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App