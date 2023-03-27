import { useEffect, useState } from 'react';
import { fetchCities, fetchStates } from '../services/helpers/ibge';

export const useStateAndCities = ({ values }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingStates = async () => {
      try {
        setIsLoading(true);
        const response = await fetchStates();
        setStates(response);
        setIsLoading(false);
      } catch {}
    };

    loadingStates();
  }, []);

  useEffect(() => {
    if (!values.state) return;
    const loadingCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCities(values.state);
        setCities(response);
        setIsLoading(false);
      } catch {}
    };
    loadingCities();
  }, [values.state]);

  return { states, cities, isLoading };
};
