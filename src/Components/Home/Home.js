import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home2 from '../Home2/Home2';

const Home = () => {
   const homes=useLoaderData()
    return (
        <div className='container '>
            <h1>this is Home page</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4  '>
            {
                homes.map(home=><Home2 key={home.id}home={home}></Home2>)
            }

            </div>
           

        </div>
    );
};

export default Home;