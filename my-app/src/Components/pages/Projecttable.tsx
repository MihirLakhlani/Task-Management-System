import React from "react";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Project_Filter from "../Forms/Filter_Forms/Project_Filter";

const Project_table = () => {
  return (
    <>
   <div className="Filter_table_with_Add">
        <table className="table table-bordered table-info">
          <thead>
            <tr>
              <th className="uk-table-expand">Start Date</th>
              <th className="uk-table-expand">End Date</th>
              <th className="uk-table-expand">Project Priority </th>
              <th className="uk-table-expand">Project Status</th>
              <th className="uk-table-expand"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-table-expand">
                <input
                  type="date"
                  name="Start_Date"
                  placeholder="Start_Date"
                ></input>
              </td>
              <td className="uk-table-expand">
                
                <input
                  type="date"
                  name="End_Date"
                  placeholder="End_Date"
                ></input>
              </td>
              <td className="uk-table-expand">
                <select name="PP" >
                  <option>SELECT</option>
                  <option value={"Low"}>Low</option>
                  <option value={"Medium"}>Mediume</option>
                  <option value={"High"}>High</option>
                </select>
              </td>
              <td className="uk-table-expand">
                <select name="PS" >
                  <option>SELECT</option>
                  <option value={"Active"}>Active</option>
                  <option value={"In-Active"}>In-Active</option>
                </select>
              </td>
              <td>
                <button >
                  Search
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    <NavLink to={"/project_Form"}>
      <button className="btn bg-info">
          Add Project
        </button>
      </NavLink>
      <table className="table">
      </table>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Check</th>
            <th scope="col">#</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Name</th>
            <th scope="col">Client Name</th>
            <th scope="col">Project Rate</th>
            <th scope="col">Project Priority</th>
            <th scope="col">Project Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /> </td>
            <td>1</td>
            <td>12/05/2000</td>
            <td>25/05/2000</td>
            <td>Mihir</td>
            <td>Mihir</td>
            <td>20$</td>
            <td>High</td>
            <td>Active</td>
            <td><button className="btn bg-info">Edit</button></td>
           <td><button className="btn bg-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Project_table;
