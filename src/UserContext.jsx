/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DomainContext } from './DomainContext';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [ministry, setMinistry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { domain, domainLoading } = useContext(DomainContext);

  useEffect(() => {
    let url;

    if(!domainLoading) {
      domain = `https://${domain}`;
      const baseUrl = (!domain.includes('localhost')) ? domain : 'https://staging-etransport.enugustate.gov.ng';
      url = `${baseUrl}/api/public/ministry`;
      console.log('domain', domain);
      console.log('base Url', baseUrl);
      console.log('url', url);
    }

    const fetchMinistry = async (url) => {
      try {
        console.log('url2',url);
        const response = await axios.get(url);
        // console.log(response);
        setMinistry(response.data);
      } catch (err) {
        // console.log('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if(!domainLoading) fetchMinistry(url);
  }, [domain]);

  return (
    <UserContext.Provider value={{ ministry, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};