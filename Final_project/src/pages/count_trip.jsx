import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import "./CSS/main.css";
import { useState } from "react";
import { useEffect } from "react";
import Tripheader from "../components/trip_nav";
import Footer from '../components/footer'

function Count_trip() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .get(
        `http://127.0.0.1:8000/api/count_trip?driver_id=${data.driver_id}&limit=1000`
      )
      .then((res) => {
        // navigate("/Count_trip")
        console.log(res);
        setdrivers([]);
        setdrivers(res.data.data.users);
      })
      .catch((error) => {
        navigate("/failed");
      });
  };
  return (
    <>
     
      <Header />
      <div style={{ position: "sticky", top: "0", left: "0" }}>
        <Tripheader />
      </div>
      <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center  " 
      style={{minHeight:"120vh", margin:"0",padding:"0",backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", minHeight:"110vh" }}> 

      <form 
       style = {{marginLeft:"575px", marginTop:"25vh"}}
        id="Count Trip_box"
        className="mt-2 w-1/2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="driver_id"
          id="driver_id"
          name="driver_id"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Count Trip
        </button>
      </form>

      {drivers.length !== 0 && (
        <table className=" border-blue-500 rounded-sm mt-4 ">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200 ">Driver id</th>
              <th className="p-2 bg-blue-200">Name</th>
              <th className="p-2 bg-blue-200">license no</th>
              <th className="p-2 bg-blue-200">Number of trips</th>
            </tr>
          </thead>
          <tbody>
            {drivers?.map((iterate, i) => (
              <tr key={i} className="hover:bg-blue-100">
                <td className="p-2 bg-green-200">{iterate?.driver_id}</td>
                <td className="p-2 bg-green-200">{iterate?.name}</td>
                <td className="p-2 bg-green-200">{iterate?.license_no}</td>
                <td className="p-2 bg-green-200">{iterate?.cnt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
               <footer style={{ position: "sticky", top: "100vh", width: "100vw" }}>
          <Footer />
        </footer>
      </body>
    </>
  );
}
export default Count_trip;
