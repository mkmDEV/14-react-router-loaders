import { redirect } from 'react-router-dom';

export default () => {
  localStorage.removeItem('token');
  localStorage.removeItem('exp');
  return redirect('/');
};
