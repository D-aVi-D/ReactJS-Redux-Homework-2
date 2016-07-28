import React, { Component } from 'react';
import './userlist.css'
import UserInfo from './userinfo.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users-actions.js";


class UserList extends Component {
    constructor(props){
        super(props);
        this.handleMarkUser = this.handleMarkUser.bind(this);
    }

    handleMarkUser(index) {
         console.log('handleMarkUser(event): called');
         this.props.markUser(index);
    }

    componentWillMount() {
        console.log('UserListConnected: componentWillMount');
    }
    
    componentDidMount() {
        console.log('UserListConnected: componentDidMount');
    }

    render() {
      const { usersFilteredList } = this.props.stateFromReducer;
        return (
          (usersFilteredList.length > 0) ?
        	<div className="user-list" >
                <div id="user-list-header">Users list:</div>
                    { usersFilteredList.map( (elem, index, array) => {
                        return <div className="user-string" id={elem.id} key={elem.id} onClick={() => {this.handleMarkUser(elem.id)}}>{elem.userName}</div>
                    })}
            <UserInfo />
        	</div> : null
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
const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;