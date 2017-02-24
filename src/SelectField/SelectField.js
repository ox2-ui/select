import Select from '../Select';
import styled from 'styled-components';

/**
 * SelectField Component
 */
const SelectField = styled(Select)`
  .Select-control {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
  }

  .Select-placeholder, &.Select--single > .Select-control .Select-value {
    padding-left: 0;
    padding-right: 0;
  }

  &.is-focused:not(.is-open) > .Select-control {
    border-color: hsla(214, 70%, 53%, 1);
    border-bottom-width: 2px;
    box-shadow: none;
  }
`;

export default SelectField;
