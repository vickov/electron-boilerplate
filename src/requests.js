const APIURL = 'https://jsonplaceholder.typicode.com/posts';
const axios = require('axios');
 export const fetchData = async () => {
    return async () => axios(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    //let res = JSON.parse(result.data);
  }; 
const getToDos = async () => {
    let res = await axios.get(`${APIURL}`);
    let data = res.data;
    return data;
}
//export const fetchData = () => axios(`https://jsonplaceholder.typicode.com/posts`);
export const addContact = (data) => axios.post(`${APIURL}/contacts`, data);
export const editContact = (data) => axios.put(`${APIURL}/contacts/${data.id}`, data);
export const deleteContact = (id) => axios.delete(`${APIURL}/contacts/${id}`);

export const loadPosts = async () =>
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export const loadUsers = async () =>
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  
export default getToDos;