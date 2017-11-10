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
        type: 'text',
        placeholder: 'Enter your last name...',
        required: true,
        value: ''
    },

    addressLine1: {
        id: 'addressLine1',
        title: 'STREET ADDRESS',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    addressLine2: {
        id: 'addressLine2',
        title: 'APT, SUITE, ETC. (OPTIONAL)',
        type: 'text',
        placeholder: '',
        required: false,
        value: ''
    },

    city: {
        id: 'city',
        title: 'CITY',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    state: {
        id: 'state',
        title: 'STATE',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    zipcode: {
        id: 'zipcode',
        title: 'ZIPCODE',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    phone: {
        id: 'phone',
        title: 'PHONE',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    // email: {
    //     id: 'email',
    //     title: 'EMAIL',
    //     type: 'email',
    //     placeholder: 'Enter a valid email address...',
    //     required: true,
    //     value: ''
    // }

    // password: {
    //     id: 'password',
    //     title: 'PASSWORD',
    //     type: 'password',
    //     placeholder: 'Enter a valid password...',
    //     required: true,
    //     value: ''
    // }
}

export default function reducer(state = initialState, action) {

    if (action.type == 'UPDATE_FORM_VALUE') {
        const id = '' + action.payload.id;
        return { ...state, [ id ]: { ...state[id], value: action.payload.value } }
    }

    return state
}
