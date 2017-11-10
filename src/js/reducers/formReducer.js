const initialState = {
    firstName: {
        title: 'FIRST NAME',
        placeholder: 'Enter your first name...',
        required: true,
        value: ''
    },
    lastName: {
        title: 'LAST NAME',
        placeholder: 'Enter your last name...',
        required: false,
        value: ''
    }
}

export default function reducer(state = initialState, action) {
    return state
}
