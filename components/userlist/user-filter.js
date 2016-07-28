import React, { Component } from 'react';
import './user-filter.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users-actions.js";

class UserFilter extends Component {
    constructor(props){
        super(props);
        this.handleFilterChangeInput = this.handleFilterChangeInput.bind(this);
    }

    componentWillMount() {
        console.log('UserFilterConnected: componentWillMount');
    }
    
    componentDidMount() {
        console.log('UserFilterConnected: componentDidMount');
    }

    handleFilterChangeInput(event) {
        console.log('handleFilterChangeInput(event): called');
        this.props.changeFilterInput(event.target.value);
    }


    render() {
        return (
        	<div className='user-filter-container'>
              <div id="filter-label">Filtered by:</div>
              <input id="filteredName" type="text" placeholder="Enter name" onChange={this.handleFilterChangeInput}/>
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

const UserFilterConnected = connect(mapStateToProps, mapDispatchToProps)(UserFilter);
export default UserFilterConnected;
