export function addUser(userName) {
    return (dispatch, getState) => {
        const state = getState();
        const action = {
            type: 'ADD_USER',
            newUser: userName
        };
        const support = {
            type: 'INPUT_FILTER_CHANGED',
            filterValue: state.currentFilterValue
        };
        dispatch(action);
        dispatch(support);
    }
}

export function changeAddInput(userName) {
    const action = {
        type: 'INPUT_ADD_CHANGED',
        newValue: userName
    };
    return action;
}

export function changeFilterInput(userName) {
    const action = {
        type: 'INPUT_FILTER_CHANGED',
        filterValue: userName
    };
    return action;
}

export function deleteUser(userIdVal) {
    return (dispatch, getState) => {
        const state = getState();
        const action = {
            type: 'DELETE_USER',
            userId: userIdVal
        };
        const support = {
            type: 'INPUT_FILTER_CHANGED',
            filterValue: state.currentFilterValue
        };
        dispatch(action);
        dispatch(support);
    }
}

export function markUser(userIndex) {
    const action = {
        type: 'MARK_USER',
        userOrderId: userIndex
    };
    return action;
}
