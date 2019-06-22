import './TextField.pcss';

class TextField extends PureComponent {
  render() {
    const {
      className,
      onChange,
      type,
      label,
      value,
      disabled,
      placeholder,
      ...restProps
    } = this.props;

    return (
      <div className={`TextField ${className}`}>
        {
          label ? (
            <label className='TextField__label'>
              {label}
            </label>
          ) : null
        }
        <input
          className='TextField__input'
          type={type}
          onChange={onChange}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          {...restProps}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  disabled   : PropTypes.bool,
  value      : PropTypes.string,
  label      : PropTypes.string,
  className  : PropTypes.string,
  onChange   : PropTypes.func,
  type       : PropTypes.string,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  type     : 'text',
  className: '',
  onChange : () => {},
};

export default TextField;
