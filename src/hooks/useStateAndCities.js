import { useEffect, useState } from 'react';
import PlacesService from '../services/PlacesService';
import { delay } from '../utils/delay';
import toast from '../utils/toast';

export const useStateAndCities = ({ values }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingStates = async () => {
      try {
        setIsLoading(true);
        const response = await PlacesService.listStates();
        await delay(2000);
        setStates(response);
        setIsLoading(false);
      } catch {
        toast({
          type: 'danger',
          text: 'Erro ao buscar estados!',
        });
      }
    };

    loadingStates();
  }, []);

  useEffect(() => {
    if (!values.state) return;
    const loadingCities = async () => {
      try {
        setIsLoading(true);
        const response = await PlacesService.listCitiesByState(values.state);
        setCities(response);
        setIsLoading(false);
      } catch {
        toast({
          type: 'danger',
          text: 'Erro ao buscar cidades!',
        });
      }
    };
    loadingCities();
  }, [values.state]);

  return { states, cities, isLoading };
};
