import './Card.pcss';

class Card extends PureComponent {
  render() {
    const {
      className,
      children,
      ...restProps
    } = this.props;

    return (
      <section
        className={`Card ${className}`}
        {...restProps}
      >
        {children}
      </section>
    );
  }
}

Card.propTypes = {
  children : PropTypes.node,
  className: PropTypes.string,
};

export default Card;
