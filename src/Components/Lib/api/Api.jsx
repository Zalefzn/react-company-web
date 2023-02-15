import axios from 'axios';


const getUrl = "https://myfakeapi.com";
const dbUrl = "http://localhost:3004/";

//get data
const Get = (path) => {
   const promise = new Promise((resolve, reject) => {
    axios.get(`${getUrl}/${path}`).then((res) => {
        resolve(res.data);
      }, (err) => {
        reject(err);
      });
   });
   return promise;
}


const GetLogin = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${dbUrl}/${path}`).then((res) => {
      resolve(res.data);
    }, (err) => {
      reject(err);
    })
  })
  return promise;
}

//post data
const Postdb = (path, dataPost) => {
   const promise = new Promise((resolve, reject) => {
      axios.post().then((res) => {

      });
   });
   return promise;
} 



//get method
const getLogin = () => GetLogin('/Register');
const getDataUser =  () => Get('/api/users/');

const ApiDataGet =  {
    //get
    getDataUser,
    getLogin,

    //post 
    Postdb,
}

export default ApiDataGet;