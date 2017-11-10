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
    // email: formData.email.value
  };

  return {
    type: "SUBMIT_FORM",
    payload: json
  };
}
