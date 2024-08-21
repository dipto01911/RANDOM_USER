// @flow strict

import * as React from 'react';
import {useState } from "react";
import './User.css';
function User(props) {
    // const {name,email,picture,phone}=props.x;
    const addname=props.addname;
    const[mobile,setmobile]=useState([]);
    const Fullname =props.x.name.first+' '+props.x.name.last;
   const showphone=()=>{ 
    let newmobile=props.x.phone;
    setmobile(newmobile);
   } 
    
    return (
        <div className='container'>
            <div className='img-container'>
<img src={props.x.picture.large} alt='' className='img'/>
            </div>
            <div className='text-container'>
<h1>Name :{Fullname} </h1>
<p>email :{props.x.email} </p>
<p >Show phone :{mobile}</p> 
<div className='btn'>
<button onClick={()=>addname(Fullname)}><small>Add member</small></button>
<button onClick={showphone}><small>Show phone</small></button>
</div>
            </div>
        </div>
    );
};

export default User;