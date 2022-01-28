import React, { useState } from "react";
import "./dashboard.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Dashboard() {
  const [formDetails, setFormDetails] = useState({
    licence_plate: "",
    vehicle_type: "",
    vehicle_subtype: "",
    datefrom: "",
    dateto: "",
  });

  const URL = "https://tolltax.xyz/demoapi/dashboard";

  const onLicencePlateChange = (e) => {
    setFormDetails({ ...formDetails, licence_plate: e.target.value });
  };

  const onVehicletypeChange = (e) => {
    setFormDetails({ ...formDetails, vehicle_type: e.target.value });
  };

  const onVehicleSubtypeChange = (e) => {
    setFormDetails({ ...formDetails, vehicle_subtype: e.target.value });
  };

  const onDateFormChange = (e) => {
    setFormDetails({ ...formDetails, datefrom: e.target.value });
  };

  const onDateToChange = (e) => {
    setFormDetails({ ...formDetails, dateto: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL, formDetails)
      .then((res) => {
        toast.success("Success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
        setFormDetails({
          licence_plate: "",
          vehicle_type: "",
          vehicle_subtype: "",
          datefrom: "",
          dateto: "",
        });
      })
      .catch((err) => toast.error(err.message));
  };
  const { licence_plate, vehicle_type, vehicle_subtype, datefrom, dateto } =
    formDetails;
  return (
    <div className="dashboard__container">
      <div className="dashboard__left"></div>
      <div className="dashboard__right">
        <form className="dashboard__form">
          <h1>Enter All Details:</h1>
          <input
            value={formDetails.licence_plate}
            type="text"
            placeholder="licence_plate"
            onChange={(e) => onLicencePlateChange(e)}
          />
          <input
            value={formDetails.vehicle_type}
            type="text"
            placeholder="vehicle_type"
            onChange={(e) => onVehicletypeChange(e)}
          />
          <input
            value={formDetails.vehicle_subtype}
            type="text"
            placeholder="vehicle_subtype"
            onChange={(e) => onVehicleSubtypeChange(e)}
          />
          <input
            value={formDetails.datefrom}
            type="text"
            placeholder="datefrom"
            onChange={(e) => onDateFormChange(e)}
          />
          <input
            value={formDetails.dateto}
            type="text"
            placeholder="dateto"
            onChange={(e) => onDateToChange(e)}
          />

          <button
            disabled={
              !(
                licence_plate &&
                vehicle_type &&
                vehicle_subtype &&
                datefrom &&
                dateto
              )
            }
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
