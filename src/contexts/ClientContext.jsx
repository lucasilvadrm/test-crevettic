import {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { clients as clientsData } from '../mocks/clients';

export const ClientContext = createContext();

export function ClientProvider({ children }) {
  const [clients, setClients] = useState(clientsData);

  const value = useMemo(() => [clients, setClients], [clients]);

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
