import React from "react";

const Project_Form = () => {
  return (
    <>
      <form className="container-fluid ">
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDate"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDate"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Project Name
          </label>

          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Description
          </label>

          <input
            type="longtext"
            className="form-control"
            id="exampleInputName"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleclientName" className="form-label">
            Client Name 
          </label>
          <input
            type="text"
            className="form-control"   
            id="exampleclientName"
            aria-describedby="clientname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleclientName" className="form-label">
            Project Rate
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleclientName"
            aria-describedby="clientname"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleclientName" className="form-label">
            Project Priority
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleclientName"
            aria-describedby="clientname"
          />
        </div> */}
        <div> Project Priority
      <br />
        <select>
            <option>select</option>
        </select>
        </div>
        <br/>
        <div>Members
        <br />
        <select>
            <option>select</option>
        </select>      
        </div>
        <br />
            <button type="submit" className="btn btn-primary">
                 Submit
            </button>            
      </form>
    </>
  );
};
export default Project_Form;
