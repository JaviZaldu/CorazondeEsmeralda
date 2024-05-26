export function validate(input) {
    let errors = {};
    if (!input.password) {
      errors.password = "Ingresa una contraseña válida";
    } else if (!/\d/.test(input.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    } else if (input.password.length < 6 || input.password.length > 15) {
      errors.password = "La contraseña debe tener entre 6 y 15 caracteres";
    }
    return errors;
}
