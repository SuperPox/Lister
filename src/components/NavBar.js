import {Switch, Route, useHistory} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

export default function NavBar() {
    const history = useHistory()
    return (
        <div>      
            <button onClick={() => history.push("/home")}> Home </button>     
            <button onClick={() => history.push("/about")}> About </button>
            <button onClick={() => history.push("/contact")}> Contact </button>
            
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>               
            </Switch>

        </div>
    )
}