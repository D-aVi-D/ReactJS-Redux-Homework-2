import React, { Component } from 'react';
import UserAdd from './useradd.js';
import UserFilter from './user-filter.js'
import UserList from './userlist.js';
import './userlistcontainer.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users-actions.js";

class UserListContainer extends Component {
    constructor(){
        super();
    }

    componentWillMount() {
        console.log('UserListContainerConnected: componentWillMount');
    }
    
    componentDidMount() {
        console.log('UserListContainerConnected: componentDidMount');
    }

    render() {
        //debugger;
        const {usersList, currentUser} = this.props.stateFromReducer;
        return (
            <div className='user-list-container container' id="container"> 
                <UserAdd />
                <UserFilter />
                <UserList />
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
const UserListContainerConnected = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
export default UserListContainerConnected;

