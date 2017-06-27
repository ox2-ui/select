import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import FontIcon from '@ox2/icon/FontIcon';
import Thumb from '@ox2/thumb/Thumb';
import styled from 'styled-components';
import {
  neutral_dark,
  critical,
  neutral_faded,
} from '@ox2/colors';

const styles = {
  circle: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    margin: '0 5px',
    borderRadius: '50%',
  },
  label: {
    paddingLeft: '7px',
    fontSize: '16px',
  },
  labelTextOnly: {
    fontSize: '16px',
  },
  labelColoredCircle: {
    paddingLeft: '3px',
    fontSize: '16px',
  },
  itemWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
  },
};

const StyledSelect = styled(ReactSelect)`
  font-family: Roboto Condensed;
  font-size: 15px;

  .Select-control {
    border: ${props =>
      props.hasError
        ? `2px solid ${critical}`
        : `1px solid ${neutral_faded}`};
  }

  &.Select--multi .Select-value {
    margin-top: 2px;
  }

  &.Select--multi .Select-value-label {
    display: inline-flex;
  }
  .Select-input, .Select-control {
    height: 32px;
  }
  &.is-focused:not(.is-open) > .Select-control {
    border-color: ${props =>
      props.hasError ? critical : neutral_dark};
    box-shadow: none;
  }

  .Select-menu-outer {
    z-index: 5;
  }
`;

/**
 * Select Component
 */
class Select extends Component {
  static propTypes = {
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Fallback icon if no image is present fot 'image' type
     */
    fallbackIcon: PropTypes.string,
    /**
     * Backgroudn color for fallback icon
     */
    fallbackIconBg: PropTypes.string,
    /**
     * Fallback icon color
     */
    fallbackIconColor: PropTypes.string,
    /**
     * Is set to true when failing validation e.g. form
     */
    hasError: PropTypes.bool,
    /**
     * Icon size (for type 'icon') default 14px
     */
    iconSize: PropTypes.string, // XXX Deprecate ?
    /**
     * Override inline-styles of the item element
     */
    itemStyle: PropTypes.object,
    /**
     * If set to True enables multi select component
     */
    multi: PropTypes.bool,
    /**
     * Enables offline image check for 'image' type
     */
    offlineEnabled: PropTypes.bool,
    /**
     * Callback after selection
     */
    onUpdate: PropTypes.func.isRequired,
    /**
     * Data for select options
     */
    options: PropTypes.array.isRequired,
    /**
     * Placeholder text
     */
    placeholder: PropTypes.string,
    /**
     * Style property to use for value-styled type
     */
    styledProperty: PropTypes.string,
    /**
     * Set type
     */
    type: PropTypes.oneOf([
      'colored',
      'colored-circle',
      'icon',
      'image',
      'value-styled',
    ]),
    /**
     * Set initial value
     */
    value: PropTypes.any,
  };

  static defaultProps = {
    className: '',
    fallbackIcon: '',
    fallbackIconBg: '',
    fallbackIconColor: '',
    hasError: false,
    iconSize: '18px', // XXX Deprecate ?
    itemStyle: {},
    multi: false,
    offlineEnabled: false,
    placeholder: '',
    styledProperty: '',
    type: null,
    value: '',
  };

  state = {
    value: this.props.value,
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  };

  handleSelectChange = value => {
    if (this.props.onUpdate) {
      if (this.props.multi) {
        this.props.onUpdate(value ? value.split(',') : []);
      } else {
        this.props.onUpdate(value ? value.value : '');
      }
    }
    this.setState({ value });
  };

  // type 'default' rendering
  renderDefault = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <div style={styles.labelTextOnly}>
          {option.label}
        </div>
      </div>
    );
  };

  // type 'value-styled' rendering
  renderValueStyled = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <div
          style={{
            ...styles.labelTextOnly,
            ...{
              [this.props.styledProperty]: option.value,
            },
          }}
        >
          {option.label}
        </div>
      </div>
    );
  };

  // type 'colored' rendering
  renderColored = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <div
          style={{
            ...{ color: option.color },
            ...styles.labelTextOnly,
          }}
        >
          {option.label}
        </div>
      </div>
    );
  };

  // type 'colored-circle' rendering
  renderColoredCircle = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <div
          style={{
            ...{ backgroundColor: option.color },
            ...styles.circle,
          }}
        />
        <div style={styles.labelColoredCircle}>
          {option.label}
        </div>
      </div>
    );
  };

  // type 'icon' rendering
  renderIcon = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <FontIcon
          color={option.iconColor}
          group={option.iconGroup}
          icon={option.icon}
          size={this.props.iconSize}
        />
        <div style={styles.label}>{option.label}</div>
      </div>
    );
  };

  // type 'image' rendering
  renderImage = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <Thumb
          color={this.props.fallbackIconBg}
          height={30}
          icon={this.props.fallbackIcon}
          iconColor={this.props.fallbackIconColor}
          image={option.image}
          localImg={option.localImg}
          offlineEnabled={this.props.offlineEnabled}
          width={30}
        />
        <div style={styles.label}>{option.label}</div>
      </div>
    );
  };

  renderImageValue = option => {
    return (
      <div
        style={{
          ...styles.itemWrapper,
          ...this.props.itemStyle,
        }}
      >
        <Thumb
          color={this.props.fallbackIconBg}
          height={20}
          icon={this.props.fallbackIcon}
          iconColor={this.props.fallbackIconColor}
          image={option.image}
          localImg={option.localImg}
          offlineEnabled={this.props.offlineEnabled}
          width={20}
        />
        <div style={styles.label}>{option.label}</div>
      </div>
    );
  };

  render() {
    const { type, hasError, ...other } = this.props;

    let select = {};

    switch (type) {
      case 'value-styled':
        select = (
          <StyledSelect
            {...other}
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderValueStyled}
            value={this.state.value}
            valueRenderer={this.renderValueStyled}
          />
        );
        break;
      case 'colored':
        select = (
          <StyledSelect
            {...other}
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderColored}
            value={this.state.value}
            valueRenderer={this.renderColored}
          />
        );
        break;
      case 'colored-circle':
        select = (
          <StyledSelect
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderColoredCircle}
            value={this.state.value}
            valueRenderer={this.renderColoredCircle}
            {...other}
          />
        );
        break;
      case 'icon':
        select = (
          <StyledSelect
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderIcon}
            value={this.state.value}
            valueRenderer={this.renderIcon}
            {...other}
          />
        );
        break;
      case 'image':
        select = (
          <StyledSelect
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderImage}
            value={this.state.value}
            valueRenderer={this.renderImageValue}
            {...other}
          />
        );
        break;
      default:
        select = (
          <StyledSelect
            hasError={hasError}
            onChange={this.handleSelectChange}
            optionRenderer={this.renderDefault}
            value={this.state.value}
            valueRenderer={this.renderDefault}
            {...other}
          />
        );
    }

    return select;
  }
}

export default Select;
