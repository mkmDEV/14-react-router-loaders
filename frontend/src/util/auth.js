import { redirect } from 'react-router-dom';

export const authToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const duration = getTokenDuration();

  if (duration < 0) {
    return 'EXPIRED';
  }

  return token;
};
export const checkAuth = () => (!authToken() ? redirect('/auth') : null);

export const getTokenDuration = () => {
  const exp = new Date(localStorage.getItem('exp'));
  const now = new Date();
  return exp.getTime() - now.getTime();
};
