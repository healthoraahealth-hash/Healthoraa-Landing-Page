import axios from 'axios';

const BASE_URL='http://localhost:5000';

const formAPI = axios.create({baseURL: `${BASE_URL}/api/formSubmission`});

export const submitForm = (data) => formAPI.post(`/`, data);

const contactAPI = axios.create({baseURL: `${BASE_URL}/api/contactSubmission`});
export const submitContact = (data) => contactAPI.post(`/`, data);