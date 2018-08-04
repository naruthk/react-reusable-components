import styled from 'styled-components';
import { elevation, colors, transition } from '../Utilities/Index.js';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  color: ${colors.black};
  ${elevation[4]};
  ${transition({
     property: 'box-shadow'
  })};
  &:hover {
      ${elevation[5]};
  }
`;