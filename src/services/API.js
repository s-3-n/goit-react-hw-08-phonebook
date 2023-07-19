import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const UserAPI = {
  login: async formData => {
    const { data } = await axios.post('users/login', formData);
    setAuthHeader(data.token);
    return data;
  },
  register: async formData => {
    const { data } = await axios.post('users/signup', formData);
    setAuthHeader(data.token);
    return data;
  },
  logout: async () => {
    const { data } = await axios.post('users/logout');
    clearAuthHeader();
    return data;
  },
  refresh: async () => {
    const { data } = await axios.get('users/current');

    return data;
  },
};

export const ContactsAPI = {
  getContacts: async () => {
    const { data } = await axios.get('contacts');

    return data;
  },
  addContact: async formData => {
    const { data } = await axios.post('contacts', formData);

    return data;
  },
  deleteContact: async contactId => {
    const { data } = await axios.delete(`contacts/${contactId}`);

    return data;
  },
};
