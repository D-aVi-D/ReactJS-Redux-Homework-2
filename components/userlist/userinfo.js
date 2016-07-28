import React, { Component } from 'react';
import './userinfo.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users-actions.js";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }


  handleDeleteUser(event) {
    console.log('handleDeleteUser(event): called');
    const {currentUser} = this.props.stateFromReducer;
    this.props.deleteUser(currentUser);
  }
 
  componentWillMount() {
      console.log('UserInfoConnected: componentWillMount');
  }
  
  componentDidMount() {
      console.log('UserInfoConnected: componentDidMount');
  }
 

  render() {
    const {currentUser, usersList} = this.props.stateFromReducer;
    let curUserName;
    let userIndex;
        if (usersList.length > 0) {
          userIndex = usersList.findIndex((elem, index, array) => {
                    if (elem.id == currentUser) {
                        return true
                    } else return false
          });
          curUserName = usersList[userIndex].userName
        }
    return (
      <div className="user-info">
          <strong>User detailed information:</strong><br/>&nbsp;&nbsp;User ID: {currentUser};<br/>&nbsp;&nbsp;User Name: {curUserName}
          <button id="delElement" onClick={ this.handleDeleteUser }>
            Delete User
          </button>
       </div>
    );
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
const UserInfoConnected = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
export default UserInfoConnected;
