import React, { useEffect, useState, } from "react";
import {useParams, Navigate, useNavigate} from "react-router-dom";


const UpdateProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [cetagory,setCetagory] = React.useState('');
    const [company,setCompany] = React.useState('');
   
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            headers:{
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result =  await result.json();
        setName(result.name);
        setPrice(result.price);
        setCetagory(result.cetagory);
        setCompany(result.company);
    }


    const updateProduct = async ()=>{
        console.log(name,price,cetagory,company);
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            method: 'Put',
            body:JSON.stringify({name,price,cetagory,company}),
            headers:{
                'Content-Type':"application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.log(result);
        navigate('/');
    }

    return(
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter product name" className="inputBox"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
            
            <input type="text" placeholder="Enter product price" className="inputBox"
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            />
            
            <input type="text" placeholder="Enter product cetagory" className="inputBox"
            value={cetagory}
            onChange={(e)=>{setCetagory(e.target.value)}}
            />
            
            <input type="text" placeholder="Enter product company" className="inputBox"
            value={company}
            onChange={(e)=>{setCompany(e.target.value)}}
            />
          
            <button onClick={updateProduct} className="btnLog">Update</button>

        </div>
    )
}

export default UpdateProduct;