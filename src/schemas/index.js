import * as yup from 'yup';

export const saleSchema = yup.object().shape({
  description: yup.string()
    .min(4, 'A descrição precisa de no mínimo 4 caracteres')
    .required('Campo Obrigatório'),
  quantity: yup.number().positive('O valor não pode ser negativo')
    .integer()
    .required('Campo Obrigatório'),
  price: yup.number().positive('O valor não pode ser negativo')
    .integer()
    .required('Campo Obrigatório'),
  status: yup.string().required('Campo Obrigatório'),
});
