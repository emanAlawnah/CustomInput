import { useState } from "react";
import CustomButton from "./shared/customButton";
import Login from "./Login";
import CustomInput from "./shared/CustomInput";
import User from "./user";

function App(){

const[users,setuser]=useState([{"id":1, "name":"eman","email":"alawanh.eman@gmail.com", "isplblocked":true},
  {"id":2, "name":"eman2","email":"alawanh.eman@gmail.com", "isplblocked":false},
  {"id":3, "name":"eman3","email":"alawanh.eman@gmail.com", "isplblocked":false},
  {"id":4, "name":"eman4","email":"alawanh.eman@gmail.com", "isplblocked":true},
]);


 return (
  
 <Login />
 )

}
 export default App;

