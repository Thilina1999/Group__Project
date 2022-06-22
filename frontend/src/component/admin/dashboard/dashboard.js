import React, { useContext, useEffect, useState } from 'react'
import "./dashboard.css"
import {Card} from "react-bootstrap";
import axios from 'axios';
import {HiOutlineUser} from "react-icons/hi";
import {MdProductionQuantityLimits} from "react-icons/md";
import {MdCategory} from "react-icons/md";
import { 
  Chart as ChartJS,
  CategoryScale, 
  LinearScale,
  BarElement,
  Title,
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
//  import Sidebar from "../adminSidebar/adminSidebar"
import {AutheContext} from "../../context/auth-context/authContext"
// import faker from "faker";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend );


export const Dashboard = () => {
  const {jwt, userId } = useContext(AutheContext)
  const [usercount,setusercount]=useState(0);
  const [productcount,setproductcount]=useState(0);
  const [usertypecount,setusertypecount]=useState({
    sellercount:0,
    customercount:0,
  });
  const [categorycount,setcategorycount]=useState(0);
  const [categorywisecount,setcategorywisecount] = useState({
    categoryname:[""],
    catcount:[0],
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
        .get(`http://localhost:8080/getUserCount`,{
          headers: { Authorization: `Bearer ${jwt}` },
        })
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
        .get(`http://localhost:8080/getProductCount`,{
          headers: { Authorization: `Bearer ${jwt}` },
        })
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
      .get(`http://localhost:8080/getSellerCount`,{
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res)=>{
        setusertypecount(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
    },[]);
  };
  Getusertypecount();

  const Getcategorycount = ()=>{
    useEffect(() =>{
      axios
      .get(`http://localhost:8080/getCatCOunt`,{
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res)=>{
        setcategorycount(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
    },[]);
  };
  Getcategorycount();

  const Getcategorytypecount = ()=>{
    useEffect(() =>{
      axios
      .get(`http://localhost:8080/getcategorywisecount`,{
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((res)=>{
        setcategorywisecount(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
    },[]);
  };
  Getcategorytypecount();

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
  const options = {
    responsive: true,
    plugins: {
    //   legend: {
    //     position: 'top' as const,
    //   },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['Shoes', 'Frock','Shirts', 'Hat'];
  const bardata = {
    labels,
    datasets: [
      
      {
        label:"category quantity",
        //data: [categorywisecount.catcount.prodCount],
         data:[20,5,8,4],
          
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
        <div className="admin-categorycount">
          <Card border="info" style={{ width: '18rem' }}>
            <Card.Header className="admin-categorycount-text"><b>Category</b></Card.Header>
            <Card.Body>
              <Card.Title className="admin-categorycount-title">Total Category Count in your company</Card.Title>
              <div className="admin-categorycount-element">
              <Card.Text className="admin-categorycount-number">
                <b>{categorycount.countcategory}</b>
              </Card.Text>
                <div className="admin-categorycount-icon">
                  <MdCategory/>
                </div>
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
        <div className="admin-barchart">
        <div><h5><b>Category Quantities</b></h5></div>
        <Bar options={options} data={bardata} />;
        </div>
      </div>
    </div>
  )
};
export default Dashboard;