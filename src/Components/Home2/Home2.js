import React from 'react';
import { Link, useNavigate,  } from 'react-router-dom';

const Home2 = ({home}) => {
    const {id,name, email, phone }=home
    const navigate=useNavigate()
    const handleNavigate= ()=>{
        navigate(`/home/${id}`)
    }
    return (
        <div>

<div class="col ">
    <div class="card">
      
      <div class="card-body bg-success ">
        <h5 class="card-title bg-warning"><h1>ID:<Link to={`/home/${id}`}>{id}</Link></h1></h5>
        <p class="card-text"><h1>name:{name}</h1>
            <h1>email:{email}</h1>
            <h1>phone:{phone}</h1></p>
            <button className='bg-warning'  onClick={handleNavigate}>show detail</button>
      </div>
    </div>
  </div>








            
            
            
            
            
            
        </div>
    );
};

export default Home2;