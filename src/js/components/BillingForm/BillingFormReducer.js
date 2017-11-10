const initialState = {
    firstName: {
        id: 'firstName',
        title: 'FIRST NAME',
        type: 'text',
        placeholder: 'Enter your first name...',
        required: true,
        value: ''
    },
    lastName: {
        id: 'lastName',
        title: 'LAST NAME',
        type: 'password',
        placeholder: 'Enter your last name...',
        required: false,
        value: ''
    },
    email: {
        id: 'email',
        title: 'EMAIL',
        type: 'email',
        placeholder: 'Enter a valid email address...',
        required: true,
        value: ''
    }
}

export default function reducer(state = initialState, action) {

    if (action.type == 'UPDATE_FORM_VALUE') {
        const id = '' + action.payload.id;
        return { ...state, [ id ]: { ...state[id], value: action.payload.value } }        
    }


    return state
}
