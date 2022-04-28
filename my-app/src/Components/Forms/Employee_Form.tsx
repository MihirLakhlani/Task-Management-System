import React from "react";
import { useState } from "react";

const Employee_Form = () => {

    const [fname,setFname] = useState(null);
    const [lname,setLname] = useState(null);
    const [email,setEmail] = useState(null);
    const [phone,setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [designation, setdesignation] = useState(null);

    
    const handleChange = (e:any) => {
        e.preventDefault()
    }
  return (
    <>      
      <div className="container-fluid">
        <form onSubmit={handleChange}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First_Name
            </label>
            <input
            onChange={(e:any)=>{setFname(e.target.value)}}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last_Name
            </label>
            <input
            // onChange={}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className = "form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div> 
          designation
             <br /> <select>  
          <option>select</option>
          <option value="xyz"></option>
          <option value="ughj"></option>
          </select> <br /> <br />
          </div>
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              id="dropdownMenuButton1"
               type="button"
             data-bs-toggle="dropdown"
            >
              aria-expanded="false"
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div> br */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Employee_Form;
