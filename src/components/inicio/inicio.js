import './inicio.scss';
import INICIO from './inicio.html';
import { setData } from '../../utils/setData';

const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
  setData();
};
export default loadInicio;
