
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Home3 from './Components/Home3/Home3';
import Main from './Components/Main/Main';
import Post from './Components/Post/Post';
import Post3 from './Components/Post3/Post3';


function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/home',
      loader: async()=>{
        return fetch ('https://jsonplaceholder.typicode.com/users')
      },
      element:<Home></Home>},



      {path:'/home/:homeId',
      loader:async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.homeId}`)
      },
      element:<Home3></Home3> 
    },




    {path:'/posts',
    loader:async()=>{
      return fetch('https://jsonplaceholder.typicode.com/posts')

    },
    element:<Post></Post>
  },
  {path:'/posts/:postID',
  loader: async({params})=>{
    return fetch (`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
  },
  element:<Post3></Post3>
}





    ]},


    {path:'*',element:<div>this is not found</div>}
  ])
 


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
      
      
    </div>
  );
}

export default App;
