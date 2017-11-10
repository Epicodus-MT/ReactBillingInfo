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
    email: formData.email.value
  };

  return {
    type: "SUBMIT_FORM",
    payload: json
  };
}
