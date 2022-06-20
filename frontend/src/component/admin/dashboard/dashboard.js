import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import {Card} from "react-bootstrap";
import axios from 'axios';
import {HiOutlineUser} from "react-icons/hi";
import {MdProductionQuantityLimits} from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import faker from "faker";

ChartJS.register(ArcElement, Tooltip, Legend);
//  import Sidebar from "../adminSidebar/adminSidebar"

export const Dashboard = () => {
  const [usercount,setusercount]=useState(0);
  const [productcount,setproductcount]=useState(0);
  const [usertypecount,setusertypecount]=useState({
    sellercount:0,
    customercount:0,
  });
  // useEffect(() =>{
  //   const Getusercount = () => {
  //       axios
  //         .get(`http://localhost:8080/getUserCount`)
  //         .then((res)=>{
  //           setusercount(res.data);
  //         })
  //         .catch((err)=>{
  //           console.log(err);
  //         });
  //       },[]);
  //       Getusercount();
  //   };
    
  
  const Getusercount = () => {
    useEffect(() =>{
      axios
        .get(`http://localhost:8080/getUserCount`)
        .then((res)=>{
          setusercount(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    },[]);
  };
  Getusercount();
  const Getproductcount = () =>{
    useEffect(() =>{
      axios
        .get(`http://localhost:8080/getProductCount`)
        .then((res)=>{
          setproductcount(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    },[]);
  };
  Getproductcount();
  const Getusertypecount = ()=>{
    useEffect(() =>{
      axios
      .get(`http://localhost:8080/getSellerCount`)
      .then((res)=>{
        setusertypecount(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
    },[]);
  };
  Getusertypecount();
 const data = {
    labels: ["Sellers","Customers"],
    datasets: [
      {
        label: '# of Votes',
           data: [usertypecount.sellercount.countuser, usertypecount.customercount.countuser],
        //data:[20,15],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)'
          
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="admin-home">
      <div className="admin-detailcard">
        <div className="admin-usercount">
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header className="admin-usercount-text"><b>Users</b></Card.Header>
            <Card.Body>
              <Card.Title className="admin-usercount-title">Total users in your company</Card.Title>
              <div className="admin-usercount-element">
              <Card.Text className="admin-usercount-number">
                <b>{usercount.countuser}</b>
              </Card.Text>
              <div className="admin-usercount-icon">
              <HiOutlineUser/></div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="admin-productcount">
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header className="admin-productcount-text"><b>Products</b></Card.Header>
            <Card.Body>
              <Card.Title className="admin-productcount-title">Total products in your company</Card.Title>
              <div className="admin-productcount-element">
              <Card.Text className="admin-productcount-number">
                <b>{productcount.countproduct}</b>
              </Card.Text>
              <div className="admin-productcount-icon"><MdProductionQuantityLimits/></div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="admin-count">
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header className="admin-count-text"><b>Header</b></Card.Header>
            <Card.Body>
              <Card.Title className="admin-ctcount-title">Total Count</Card.Title>
                {/* {usertypecount.customercount.customercount} */}
              <div className="admin-count-element">
              <Card.Text>
                <div className="admin-count-icon"><MdProductionQuantityLimits/></div>
              </Card.Text>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="admin-chart">
        <div className="admin-piechart">
          <div><h5><b>Users in your company</b></h5></div>
        <Pie data={data} />
        </div>
      
      </div>
    </div>
  )
};
export default Dashboard;