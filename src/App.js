import NavBar from './components/NavBar'
import './App.css';
import AllTodos2 from './components/AllTodos2'
import Form from './components/Form'




function App() {
  return (
    <div className="App" >
      <div className="navbar">
        <NavBar/>
      </div>      
      <div className="container">          
          <div className="header">
            <h1>Todo List</h1>         
            <div>
              <Form />
            </div>
            <AllTodos2/>
        </div>
      </div>

    </div>
  );
}

export default App;
