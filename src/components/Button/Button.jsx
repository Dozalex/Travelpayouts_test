import './Button.pcss';

class Button extends PureComponent {
  render() {
    const {
      className,
      children,
      onClick,
      disabled,
      primary,
      ...restProps
    } = this.props;

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`Button ${className} ${primary ? 'Button--primary' : ''}`}
        {...restProps}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  primary : PropTypes.bool,
  disabled : PropTypes.bool,
  onClick  : PropTypes.func,
  children : PropTypes.node,
  className: PropTypes.string,
};

export default Button;
