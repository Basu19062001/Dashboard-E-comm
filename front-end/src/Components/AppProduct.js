import React, { useState } from "react";

const AddProduct = ()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [cetagory,setCetagory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);
   
    const addProduct = async ()=>{
        
        if(!name || !price || !cetagory || !company){

            setError(true);
            return false;
        }
        
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,cetagory,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        console.log(result);
        setName("");
        setPrice("");
        setCetagory("");
        setCompany("");
    }

    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter product name" className="inputBox"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
          { error && !name && <span className="invalid-input">Enter valid name</span>}
            
            <input type="text" placeholder="Enter product price" className="inputBox"
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            />
           { error && !price && <span className="invalid-input">Enter valid price</span>}
            
            <input type="text" placeholder="Enter product cetagory" className="inputBox"
            value={cetagory}
            onChange={(e)=>{setCetagory(e.target.value)}}
            />
            {error && !cetagory && <span className="invalid-input">Enter valid cetagory</span>}
            
            <input type="text" placeholder="Enter product company" className="inputBox"
            value={company}
            onChange={(e)=>{setCompany(e.target.value)}}
            />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={addProduct} className="btnLog">Add</button>

        </div>
    )
}

export default AddProduct;