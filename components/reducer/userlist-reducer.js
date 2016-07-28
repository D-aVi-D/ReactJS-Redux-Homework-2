const initialState = {
        idLowerValue: parseInt(11),
        currentUser: 1,
        currentInputValue: '',
        currentFilterValue: '',
        usersList: [{id: 1, userName: 'External John Doe #1'}, 
                    {id: 2, userName: 'External John Doe #2'},
                    {id: 3, userName: 'External John Doe #3'},
                    {id: 4, userName: 'External John Doe #4'}],
        usersFilteredList: [{id: 1, userName: 'External John Doe #1'}, 
                    {id: 2, userName: 'External John Doe #2'},
                    {id: 3, userName: 'External John Doe #3'},
                    {id: 4, userName: 'External John Doe #4'}]
}

function filterUsers(usr, filterWith = '') {
    return usr.userName.startsWith(filterWith);
}


export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const {newUser} = action;
            let users = [...state.usersList, {id: state.idLowerValue, userName: newUser}];
            let nextIdLowerValue = state.idLowerValue + 1;
            document.getElementById('enteredName').value = '';
            return Object.assign({}, state, {
                usersList: users,
                currentInputValue: '',
                idLowerValue: nextIdLowerValue
            });
        }

        case 'INPUT_ADD_CHANGED': {
            const {newValue} = action;
            return Object.assign({}, state, {
                currentInputValue: newValue
            });
        }

        case 'INPUT_FILTER_CHANGED': {
            const {filterValue} = action;
            let filteredUsers;
            if (filterValue != '') {
                    filteredUsers = state.usersList.filter((usr)=>{
                        return usr.userName.startsWith(filterValue);
               });
            } else {
                    filteredUsers = state.usersList;
                }
            return Object.assign({}, state, {
                currentFilterValue: filterValue,
                usersFilteredList: filteredUsers
        });
        }

        case 'DELETE_USER': {
            const {userId} = action;
            let users = [...state.usersList];
            let userOrderId = users.findIndex((elem, index, array) => {
                    if (elem.id == userId) {
                        return true
                    } else return false
            });
            console.log('userOrderId to delete: ' + userOrderId);
            users.splice(userOrderId, 1);
            return Object.assign({}, state, {
                currentUser: 1,
                usersList: users
            });
        }

        case 'MARK_USER': {
            const {userOrderId} = action;
            return Object.assign({}, state, {
                currentUser: userOrderId
            });
        }

        default: {
            return state;        
        }
    }
}


