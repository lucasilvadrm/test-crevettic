import {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { clients as clientsData } from '../mocks/clients';

export const ClientContext = createContext();

export function ClientProvider({ children }) {
  const [clients, setClients] = useState(clientsData);

  const addNewClient = (newClient) => {
    setClients((prev) => [...prev, newClient]);
  };

  const value = useMemo(() => ({ clients, addNewClient }), [clients]);

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
