import { Alert } from "react-native";

const maiusculo = "(?=(?:.*?[A-Z]){1})";
const numero = "(?=(?:.*?[0-9]){1})";
const caracEspecial =
  "(?=(?:.?[!@#$%()+^&}{:;?.]){1})(?!.s)[0-9a-zA-Z!@#;$%(){}+^&]";

export function validateEmail(email: string): boolean {
  const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return emailRegex.test(email);
}

export function validateField(value: string, errorMessage: string): boolean {
  const requiredField: string = "Field is required";

  if (value === undefined || value.trim().length === 0) {
    console.log(requiredField, errorMessage);
    Alert.alert(requiredField, errorMessage);
    return false;
  }

  return true;
}

export function validadePassword(
  password: string,
  errorMessage: string
): boolean {
  if (password === undefined || password.trim() === "") {
    Alert.alert("Password é obrigatório!", errorMessage);
    return false;
  }

  if (password.length < 8) {
    Alert.alert("Password precisa ter no minimo 8 caracteres", errorMessage);

    return false;
  }

  if (!password.match(maiusculo)) {
    Alert.alert(
      "Password precisa ter no minimo 1 letra maiuscula",
      errorMessage
    );
    return false;
  }

  if (!password.match(numero)) {
    Alert.alert("Password precisa ter no minimo 1 numero", errorMessage);
    return false;
  }

  if (!password.match(caracEspecial)) {
    Alert.alert(
      "Password precisa ter no minimo 1 caracter especial",
      errorMessage
    );

    return false;
  }
  return true;
}
