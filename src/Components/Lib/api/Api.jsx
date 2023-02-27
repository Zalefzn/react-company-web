import axios from 'axios';


const getUrl = "http://localhost:3001";

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
  
//post data
const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
      axios.post(`${getUrl}/${path}`, data).then((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  return promise;
}

//post method
const postUser = (data) => Post('dataUsers', false, data )

//get method
const getDataUser =  () => Get('dataUsers');

const ApiDataGet =  {
    //get
    getDataUser,

    //post 
    postUser,
}

export default ApiDataGet;