import dayjs from 'dayjs';
import { delay } from '../../../utils/delay';

export const initialValues = {
  description: '',
  quantity: '',
  price: '',
  status: '',
  client: '',
  dateOfSale: '',
};

export const onSubmit = async (values, { resetForm }) => {
  console.log('Submitted', values);
  console.log({
    ...values,
    dateOfSale: dayjs(values.dateOfSale).format('DD/MM/YYYY'),
  });
  await delay(1000);
  resetForm();
};
