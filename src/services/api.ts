import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.todo.maracanau.ifce.edu.br'
}) 

export default api;