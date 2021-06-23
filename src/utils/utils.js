import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.dev.billup.app',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJVRUNPMTlDOG1ZVWVISTFiQlJrdXRIcElyOTMiLCJwaG9uZSI6Iis5MTk3NDA2MDY3MjgiLCJpYXQiOjE2MjQwNTkxNDAsImV4cCI6MTYyOTI0MzE0MH0.gxpnZLdR8gZR7AocvTvVUmUzVVP-5TjFqzqdE2uM3oA`,
  },
});

export const validateResponse = (response) => {
  const { status, data } = response;
  if (status === 200 && data && data.status === 'OK') {
    return true;
  }
  return false;
};
