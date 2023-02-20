import axios from 'axios';


const getUrl = "http://localhost:6000/client";


//get data
const Get = () => {
   const promise = new Promise((resolve, reject) => {
    axios.get(`${getUrl}`).then((res) => {
        resolve(res.data);
      }, (err) => {
        reject(err);
      });
   });
   return promise;
}



//post data




//get method
const getDataUser =  () => Get('/api/users/');

const ApiDataGet =  {
    //get
    getDataUser,

    //post 

}

export default ApiDataGet;