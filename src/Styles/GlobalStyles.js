import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export default globalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
`;
