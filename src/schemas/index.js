import * as yup from 'yup';

export const saleSchema = yup.object().shape({
  description: yup.string()
    .min(4, 'A descrição precisa de no mínimo 4 caracteres')
    .required('Campo Obrigatório'),
  quantity: yup.string()
    .required('Campo Obrigatório'),
  price: yup.string()
    .required('Campo Obrigatório'),
  status: yup.string().required('Campo Obrigatório'),
  client: yup.string().required('Campo Obrigatório'),
  dateOfSale: yup.date().required('Campo Obrigatório'),
});

export const clientSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'O campo precisa ter mais de 2 caracteres')
    .max(200, 'O limite de caracteres é 200')
    .required('Campo Obrigatório'),
  street: yup.string()
    .min(3, 'O campo precisa ter mais de 2 caracteres')
    .required('Campo Obrigatório'),
  number: yup.number().integer().positive('O valor não pode ser negativo')
    .required('Campo Obrigatório'),
  state: yup.string()
    .required('Campo Obrigatório'),
  city: yup.string()
    .min(3, 'O campo precisa ter mais de 2 caracteres')
    .required('Campo Obrigatório'),
  phone: yup.string().min(14, 'O campo precisa ter no mínimo de 14 caracteres')
    .required('Campo Obrigatório'),
});
