import TextField from 'components/TextField';

import icon from 'images/copy-icon.svg';

import './TextFieldForCopy.pcss';

class TextFieldForCopy extends PureComponent {
  onPromocodeFocus = event => {
    event.target.select();
    document.execCommand('copy');
    event.target.blur();
  };

  render() {
    const {
      label,
      value,
      onCopy,
      className,
      ...restProps
    } = this.props;

    return (
      <div className={`TextFieldForCopy ${className}`}>
        <TextField
          className='TextFieldForCopy__input'
          label={label}
          value={value}
          onCopy={onCopy}
          onFocus={this.onPromocodeFocus}
          {...restProps}
        />

        <img
          className='TextFieldForCopy__icon'
          src={icon}
          alt='copy-icon'
        />
      </div>
    );
  }
}

TextFieldForCopy.propTypes = {
  className: PropTypes.string,
  value    : PropTypes.string,
  label    : PropTypes.string,
  onCopy   : PropTypes.func,
};

TextFieldForCopy.defaultProps = {
  type     : 'text',
  className: '',
  onChange : () => {},
};

export default TextFieldForCopy;
