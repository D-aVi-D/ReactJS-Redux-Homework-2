import React, { Component } from 'react';
import './useradd.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users-actions.js";


class UserAdd extends Component {
    constructor(props){
        super(props);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleAddChangeInput = this.handleAddChangeInput.bind(this);
    }

    componentWillMount() {
        console.log('UserAddConnected: componentWillMount');
    }
    
    componentDidMount() {
        console.log('UserAddConnected: componentDidMount');
    }

    handleAddUser(event) {
        console.log('handleAddUser(event): called');
        const {currentInputValue} = this.props.stateFromReducer;
        if (currentInputValue != '') {
            this.props.addUser(currentInputValue);
        }
    }

    handleAddChangeInput(event) {
        console.log('handleAddChangeInput(event): called');
        this.props.changeAddInput(event.target.value);
    }

    render() {
        return (
        	<div className='user-add-container'>
              <div id="username-label">Enter new <br/>UserName: </div>
              <input id="enteredName" type="text" placeholder="Enter Name"  onChange={this.handleAddChangeInput}/>
              <button id="addNameButton" type="submit" onClick={this.handleAddUser}>
                Add New User
              </button>
          </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UserAddConnected = connect(mapStateToProps, mapDispatchToProps)(UserAdd);
export default UserAddConnected;