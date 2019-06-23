import './LanguageSelect.pcss';

class LanguageSelect extends PureComponent {
  state = {
    language: localStorage.i18nextLng || 'en-US',
    isShowLanguageList: false
  };

  languages = ['en-US', 'ru'];

  handleShowLanguageList = () => {
    this.setState({
      isShowLanguageList: !this.state.isShowLanguageList
    });
  };

  handleSelectLanguage = (countryCode) => () => {
    this.props.i18n.setLanguage(countryCode);
    this.setState({
      language: countryCode,
      isShowLanguageList: false
    })
  };

  renderLanguageList = () => {
    return this.state.isShowLanguageList && (
      <ul className='LanguageSelect__menu'>
        {
          this.languages.map((language, index)=> {
            return (
              <li key={'lng' + index} onClick={this.handleSelectLanguage(language)}>
                <img src={`${process.env.BASE_URL}images/flags/${language}.svg`} alt='lng'/>
                {language.toUpperCase()}
              </li>
            )
          })
        }
      </ul>
    )
  };

  render() {
    return (
      <div
        className='LanguageSelect'
        onClick={this.handleShowLanguageList}
      >
        <img src={`${process.env.BASE_URL}images/flags/${this.state.language}.svg`} alt='lng'/>
        {this.state.language.toUpperCase()}

        {this.renderLanguageList()}
      </div>
    );
  }
}

LanguageSelect.propTypes = {
  i18n: PropTypes.object
};

LanguageSelect.defaultProps = {
  i18n: {}
};

export default translate()(LanguageSelect);
