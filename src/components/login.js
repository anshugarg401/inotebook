import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';



 

const Login =  () => {

    const navigate = useNavigate();
const [cridencials, setcridencials] = useState({
   
    email: "",
    password: ""
   
  });
  const OnChange = (e) => {
    setcridencials({ ...cridencials, [e.target.name]: e.target.value });
  };
  const {email,password} = cridencials;
  const HandleSubmit = async (e) => {
    e.preventDefault()
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     
    },

    body: JSON.stringify({email:email,password:password}),
  });
  const json = await response.json();
  
 
  setcridencials({
   
    email: "",
    password: ""
    
  })
  if(json.success){
    navigate('/');
}else{
    alert("not good")
}
 
};
 

  return (
    <div>
      <form onSubmit={HandleSubmit}>
     
      <div className="mb-3 row">
        <label htmlFor="email" className="sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            value={cridencials.email}
            onChange={OnChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="password" className="sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            value={cridencials.password}
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={OnChange}
          />
        </div>
      </div>
      
      <button
        className="btn btn-primary"
        type="submit"
        
      > Submit</button>
      </form>
    </div>
  );
};

export default Login;
