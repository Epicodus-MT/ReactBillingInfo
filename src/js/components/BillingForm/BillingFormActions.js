export function updateFormValue(id, value) {
  return {
    type: "UPDATE_FORM_VALUE",
    payload: {
      id: id,
      value: value
    }
  };
}

export function submitForm(formData) {
  const json = {
    first_name: formData.firstName.value,
    last_name: formData.lastName.value,
    address_line1: formData.addressLine1.value,
    address_line1: formData.addressLine2.value,
    city: formData.city.value,
    state: formData.state.value,
    zipcode: formData.zipcode.value,
    phone: formData.phone.value,

    cardNumber: formData.cardNumber.value,
    securtityCode: formData.securtityCode.value,
    expirationMonth: formData.expirationMonth.value,
    expirationYear: formData.expirationYear.value,
  };

  return {
    type: "SUBMIT_FORM",
    payload: json
  };
}
