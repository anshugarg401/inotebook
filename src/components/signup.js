import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
  const [cridencials, setcridencials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  const OnChange = (e) => {
    setcridencials({ ...cridencials, [e.target.name]: e.target.value });
  };
  const {name,email,password} = cridencials;
  const HandleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({name:name , email:email ,password:password}),
    });
    const json = await response.json();
   
    
    setcridencials({
        name: "",
        email: "",
        password: "",
        cpassword: ""
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
        <label htmlFor="name" className="sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            value={cridencials.name}
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={OnChange}
          />
        </div>
      </div>
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
      <div className="mb-3 row">
        <label htmlFor="cpassword" className="sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            value={cridencials.cpassword}
            type="password"
            className="form-control"
            name="cpassword"
            id="cpassword"
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

export default Signup;
