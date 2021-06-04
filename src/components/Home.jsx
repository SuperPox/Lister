import React from 'react'
import AllTodos2 from './AllTodos2'
import Form from './Form'


const Home = () => {
    return (
         <div className="container">          
          <div className="header">
            <h1>Todo List</h1>         
            <div>
              <Form />
            </div>
            <AllTodos2/>
        </div>
    </div>
    );
}

export default Home;