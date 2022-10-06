import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home3 = () => {
    const home=useLoaderData()
   
    const {id,name,phone,username}=home
    return (
        <div>


<div class="row row-cols-1 row-cols-md-1 g-4">
  
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <h5 class="card-title"> <h1>details about home3333</h1></h5>
        <p class="card-text"><h1>{id}</h1>
            <h1>{phone}</h1>
            <h1>{name}</h1> 
            <h1>{username}</h1></p>
      </div>
    </div>
  </div>
</div>       
           
        </div>
    );
};

export default Home3;