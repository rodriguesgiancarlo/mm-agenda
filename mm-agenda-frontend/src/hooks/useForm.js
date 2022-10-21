import { useState } from 'react';
import useApi from '@/hooks/useApi';

const useForm = (defaultData = null) => {
  const [formData, setFormData] = useState(defaultData);
  const [formErrors, setFormErrors] = useState(null);
  const { get, post, put, loading, setLoading } = useApi();

  const reset = () => setFormData(defaultData);

  const setData = (key, value) => setFormData({ ...formData, [key]: value });

  const setDataValues = dataObject => setFormData(dataObject);

  const executeGet = async uri => {
    try {
      setFormErrors(null);
      const response = await get(uri);
      return response;
    } catch (err) {
      setFormErrors(err.response.data);
      setLoading(false);
      return null;
    }
  };

  const executePost = async uri => {
    try {
      setFormErrors(null);
      const response = await post(uri, formData);
      return response;
    } catch (err) {
      setFormErrors(err.response.data);
      setLoading(false);
      return null;
    }
  };

  const executePut = async uri => {
    try {
      setFormErrors(null);
      const response = await put(uri, formData);
      return response;
    } catch (err) {
      setFormErrors(err.response.data);
      setLoading(false);
      return null;
    }
  };

  return {
    data: formData,
    errors: formErrors,
    loading,
    get: executeGet,
    post: executePost,
    put: executePut,
    reset,
    setData,
    setDataValues,
  };
};

export default useForm;
