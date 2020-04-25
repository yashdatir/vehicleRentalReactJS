import axios from 'axios';
export async function login(info){
    await axios.post('http://localhost:3000/login');
}
