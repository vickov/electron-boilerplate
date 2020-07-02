//const APIURL = 'https://jsonplaceholder.typicode.com/';
const APIURL = 'http://localhost:5000/';
const axios = require('axios');
 export const fetchData = async () => {
    return async () => axios(
      APIURL + `posts`,
    );
    //let res = JSON.parse(result.data);
  }; 
const getToDos = async () => {
    let res = await axios.get(`${APIURL}`);
    let data = res.data;
    return data;
}
//export const fetchData = () => axios(`APIURLposts`);
export const addContact = (data) => axios.post(`${APIURL}/contacts`, data);
export const editContact = (data) => axios.put(`${APIURL}/contacts/${data.id}`, data);
export const deleteContact = (id) => axios.delete(`${APIURL}/contacts/${id}`);

export const loadPosts = async () =>
  await fetch(APIURL+ "posts")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

export const loadUsers = async () =>
    await fetch(APIURL + "users")
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json())
  

export const updateUsers  = async()  =>
      await fetch(APIURL + "users/28", settings)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())
  

const settings = {
   method: 'PATCH',
   headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
    },
    body: JSON.stringify("")
 };

     

export default getToDos;