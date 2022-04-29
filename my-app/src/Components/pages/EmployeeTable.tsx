import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as AiIcons from "react-icons/ai";
import axios from "axios";

const EmployeeTable = () => {
const [data,setData] = useState([])
const url = "http://localhost:4000/posts"

  useEffect(()=> {
    axios.get(url).then((res)=>
    {
      console.log(res.data);
    })
  },[])

  return (
    <>
          <table>
            <thead>
              Designation
            </thead>
            <tbody>
              <td>
                <select>
                  <option>xyz</option>
                </select>
              </td>
            </tbody>
          </table>
<br />
      <NavLink to={"/employee_form"}>
        <button className="btn bg-info">
             Add Employee
        </button>
        <br />
      </NavLink>
      <br />

      <table className="table table-bordered table-dark">

        <thead>
          <tr>
            <th scope="col">first_name</th> 
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Designation</th>
          </tr>
        </thead> 
        {/* <tbody></tbody> */}
      </table>
    </>
  );
};
export default EmployeeTable;
