import { useState } from 'react';
import axios from 'axios';

const useApi = (baseUrl = 'http://127.0.0.1:8080/api') => {
  const [loading, setLoading] = useState(false);

  const get = async (uri, queryString = null) => {
    setLoading(true);
    const response = await axios.get(baseUrl + uri);
    setLoading(false);
    return response.data;
  };

  const post = async (uri, body) => {
    setLoading(true);
    const response = await axios.post(baseUrl + uri, body);
    setLoading(false);
    return response.data;
  };

  const put = async (uri, body) => {
    setLoading(true);
    const response = await axios.put(baseUrl + uri, body);
    setLoading(false);
    return response.data;
  };

  const destroy = async uri => {
    setLoading(true);
    const response = await axios.delete(baseUrl + uri);
    setLoading(false);
    return response.data;
  };

  return {
    loading,
    setLoading,
    get,
    post,
    put,
    destroy,
  };
};

export default useApi;
