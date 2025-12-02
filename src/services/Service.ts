import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL

})

// Função Buscar
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data); 
}

//Função Cadastrar
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data); 
}

//Função Atualizar
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data); 
}

//Função Deletar
export const deletar = async (url: string) => {
    await api.delete(url);
    
}