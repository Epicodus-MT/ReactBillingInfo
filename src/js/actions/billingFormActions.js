export function submitForm(formData) {
  return {
    type: "SUBMIT_SHIPPING_FORM",
    payload: formData
  };
}
