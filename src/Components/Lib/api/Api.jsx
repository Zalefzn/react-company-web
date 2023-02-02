import axios from 'axios';


const getUrl = "https://myfakeapi.com";

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

const getDataUser =  () => Get('/api/users/');

const ApiDataGet =  {
    getDataUser,
}

export default ApiDataGet;