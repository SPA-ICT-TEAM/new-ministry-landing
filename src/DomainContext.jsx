/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const DomainContext = createContext();

export const DomainProvider = ({ children }) => {
  const [domain, setDomain] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const currentHost = window.location.host;
        console.log('Domain:', currentHost);
        setDomain(currentHost);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDomain();
  }, []);

  return (
    <DomainContext.Provider value={{ domain, domainLoading: loading, domainError: error }}>
      {children}
    </DomainContext.Provider>
  );
};





