import * as Yup from "yup";

export const nameValidation = Yup.object().shape({
  name: Yup.string().required("Введите имя").nullable(true),
});
