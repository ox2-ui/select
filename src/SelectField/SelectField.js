import Select from '../Select';
import styled from 'styled-components';
import { positive } from '@ox2/colors';

/**
 * SelectField Component
 */
const SelectField = styled(Select)`
  .Select-control {
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0;
    border-bottom-width: ${props => props.hasError ? '2px' : '1px'};
  }

  .Select-placeholder, &.Select--single > .Select-control .Select-value {
    padding-left: 0;
    padding-right: 0;
  }

  &.is-focused:not(.is-open) > .Select-control {
    border-color: ${positive};
    box-shadow: none;
  }

  &.Select--multi .Select-value {
    margin-left: 0;
    margin-right: 5px;
  }
`;

export default SelectField;
