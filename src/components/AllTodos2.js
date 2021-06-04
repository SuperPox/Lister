import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/fetchTodos'
import TodoList from './TodoList'

class AllTodos2 extends Component {   
  
  componentDidMount() {
    console.log("ALL2: component did mount")
    this.props.fetchTodos()
  }
  
  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      console.log("ALL2: building list")   
      return <TodoList todos={this.props.todos} />
    }
  }

  render() {
    return (
      <div className="App">
        <div>
            {this.handleLoading()}
        </div>
        
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  console.log("ALL2: mapDispatch / state: ", state)
  return {
    todos: state.todos,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchTodos })(AllTodos2)