import { useFormik } from 'formik';
import { useContext } from 'react';
import { ClientContext } from '../contexts/ClientContext';
import { clientSchema } from '../schemas';
import { delay } from '../utils/delay';
import toast from '../utils/toast';
import { useStateAndCities } from './useStateAndCities';

const initialValues = {
  name: '',
  street: '',
  number: '',
  state: '',
  city: '',
  phone: '',
};

export const useFormModal = ({ onCloseModal }) => {
  const { addNewClient } = useContext(ClientContext);

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
    validationSchema: clientSchema,
    onSubmit: async (fields) => {
      addNewClient({ id: Math.random(), ...fields });
      await delay(2000);
      toast({
        type: 'success',
        text: 'Cliente cadastrado com sucesso!',
        duration: 3000,
      });
      resetForm();
      onCloseModal();
    },
  });

  const { states, cities, isLoading } = useStateAndCities({ values });

  return {
    states,
    cities,
    isLoading,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  };
};
