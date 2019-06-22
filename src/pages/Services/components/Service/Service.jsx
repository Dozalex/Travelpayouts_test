import Card             from 'components/Card';
import TextFieldForCopy from 'components/TextFieldForCopy';
import Button           from 'components/Button';

import './Service.pcss';

class Service extends PureComponent {
  handleGetBonus = () => {
    alert(this.props.t('msg.getBonus'));
  };

  onCopy = () => {
    alert(this.props.t('msg.promocodeCopied'));
  };

  render() {
    const {
      service,
      t,
    } = this.props;

    return (
      <Card className='Service'>
        <div className='Service__info'>
          <h2 className='Service__title'>
            {service.title}
          </h2>
          <p className='Service__description'>
            {service.description}
          </p>
        </div>

        <TextFieldForCopy
          className='Service__promocode'
          label={t('label.promocode')}
          value={service.promocode}
          onCopy={this.onCopy}
        />

        <Button
          className='Service__bonus-btn'
          primary
          onClick={this.handleGetBonus}
        >
          {t('btn.getBonus')}
        </Button>
      </Card>
    );
  }
}

Service.propTypes = {
  service: PropTypes.shape({
    title      : PropTypes.string,
    description: PropTypes.string,
    link       : PropTypes.string,
    promocode  : PropTypes.string,
  }),

  t: PropTypes.func,
};

export default translate()(Service);
