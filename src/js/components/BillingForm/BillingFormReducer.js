const initialState = {
    firstName: {
        id: 'firstName',
        title: 'FIRST NAME',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    lastName: {
        id: 'lastName',
        title: 'LAST NAME',
        type: 'text',
        placeholder: '',
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


    cardNumber: {
        id: 'cardNumber',
        title: 'CARD NUMBER',
        type: 'text',
        placeholder: '',
        required: true,
        value: ''
    },

    securtityCode: {
        id: 'securtityCode',
        title: 'SECURITY CODE',
        type: 'text',
        placeholder: '***',
        required: true,
        value: ''
    },

    expirationMonth: {
        id: 'expirationMonth',
        title: 'M',
        type: 'text',
        placeholder: 'MM',
        required: true,
        value: ''
    },

    expirationYear: {
        id: 'expirationYear',
        title: 'Y',
        type: 'text',
        placeholder: 'YY',
        required: true,
        value: ''
    },

}

export default function reducer(state = initialState, action) {

    if (action.type == 'UPDATE_FORM_VALUE') {
        const id = '' + action.payload.id;
        return { ...state, [ id ]: { ...state[id], value: action.payload.value } }
    }

    return state
}
