import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { ModalContext } from '../contexts/ModalContext';
import { saleSchema } from '../schemas';
import { delay } from '../utils/delay';
import toast from '../utils/toast';

export const initialValues = {
  description: '',
  quantity: '',
  price: '',
  status: '',
  client: '',
  dateOfSale: dayjs(new Date()),
};

export const useFormSale = () => {
  const { clients } = useContext(ClientContext);
  const { handleOpenModal } = useContext(ModalContext);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: saleSchema,
    validateOnChange: true,
    onSubmit: async (fields) => {
      // eslint-disable-next-line no-console
      console.log({
        ...fields,
        quantity: Number(fields.quantity),
        dateOfSale: dayjs(fields.dateOfSale).format('DD/MM/YYYY'),
      });
      await delay(1000);
      toast({
        type: 'success',
        text: 'Salvo com sucesso!',
        duration: 3000,
      });
      resetForm();
    },
  });

  return {
    clients,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
    handleOpenModal,
  };
};
