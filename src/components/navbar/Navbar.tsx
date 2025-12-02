import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-900 text-white flex justify-between p-4">
      <Link to="/home" className="text-2xl font-bold">
        🩺 Vita Care
      </Link>
      <div className="flex gap-4">
        <Link to="/categorias">Categorias</Link>
        <Link to="/cadastro">Cadastrar Categoria</Link>
      </div>
    </nav>
  );
}

export default Navbar;
