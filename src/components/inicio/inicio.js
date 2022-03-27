import './inicio.scss';
import INICIO from './inicio.html';
import { setButtonsEvent, setData } from '../../utils/setData';

const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
  setData();
  setButtonsEvent();
};
export default loadInicio;
