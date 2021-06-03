import NavBar from './components/NavBar'
import './App.css';
import AllTodos2 from './components/AllTodos2'




function App() {
  return (
    <div className="App" >
      <div className="container">
          <div className="header">
            <h1>Todo</h1>
            <NavBar/>
            <AllTodos2/>
        </div>
      </div>

    </div>
  );
}

export default App;
