/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { DomainContext } from './DomainContext';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { domain, domainLoading } = useContext(DomainContext);

  useEffect(() => {
    let url;

    if(!domainLoading && id != null) {
      domain = `https://${domain}`;
      const baseUrl = (!domain.includes('localhost')) ? domain : 'https://staging-etransport.enugustate.gov.ng';
      url = `${baseUrl}/api/public/ministry/projects/${id}`;
    }

    const fetchProject = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log('project:',response);
        setProject(response.data.project);
      } catch (err) {
        // console.log('error:',err.response.data);
        if(err.response) setError(err.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProject(url);
  }, [id, domain]);

  return (
    <ProjectContext.Provider value={{ project, loading, error, setId }}>
      {children}
    </ProjectContext.Provider>
  );
};


