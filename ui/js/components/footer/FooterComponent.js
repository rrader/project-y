import React from 'react';

class FooterComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="as footer">
        <div className="about-project">
          <h4>Про проект</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="who-we-are">
          <h4>Хто ми?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="join-us">
          <h4>Приєднуйся до нас</h4>
          <div className="icons">
            <a href="#" className="facebook">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#" className="vk">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-vk fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#" className="twitter">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#" className="google">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="ask">
          <h4>Досі маєте питання?</h4>
          <div className="questions">
            <a href="#" className="question">Поширені запитання</a>
            <a href="#" className="question">API для розробників</a>
            <a href="#" className="question">GitHub репозиторій</a>
            <a href="#" className="question">Знайшли помилку?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
