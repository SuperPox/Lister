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
      console.log("ALL2: updating todos")   
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

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  }
}

// my actions function as async DispatchToProps

export default connect(mapStateToProps, { fetchTodos })(AllTodos2)

