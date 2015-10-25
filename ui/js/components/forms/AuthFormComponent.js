import React from 'react';

class AuthFormComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="modal fade position" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="registration-wrapper">
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <a href="#registration-form" aria-controls="home" role="tab" data-toggle="tab">
                <h4>Реєстрація</h4>
              </a>
            </li>
            <li role="presentation">
              <a href="#sign-in-form" aria-controls="profile" role="tab" data-toggle="tab">
                <h4>Вхід</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content registration-block">
            <div role="tabpanel" className="tab-pane active" id="registration-form">
              <form className="cd-form floating-labels">
                <fieldset>
                  <div className="icon">
                    <label className="cd-label" htmlFor="cd-name">Прізвище та Ім’я</label>
                    <input className="user form__input" type="text" name="cd-name" id="cd-name" maxLength="75" required="required"/>
                  </div>
                  <div className="icon">
                    <label className="cd-label" htmlFor="cd-email">Email</label>
                    <input className="email form__input" type="email" name="cd-email" id="cd-email" maxLength="50" required="required"/>
                  </div>
                  <div className="icon">
                    <label className="cd-label" htmlFor="cd-email">Пароль (мінімум 6 символів)</label>
                    <input type="password" pattern=".{6,}" maxLength="15" required="required" className="form__input"/>
                  </div>
                  <div className="authentification">
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
                </fieldset>
                <div>
                  <input type="submit" value="Зареєструватись"/>
                </div>
              </form>
            </div>
            <div role="tabpanel" className="tab-pane" id="sign-in-form">
              <form className="cd-form floating-labels">
                <fieldset>
                  <div className="icon">
                    <label className="cd-label" htmlFor="cd-email">Email</label>
                    <input className="email form__input" type="email" name="cd-email" id="cd-email" maxLength="50" required="required"/>
                  </div>
                  <div className="icon">
                    <label className="cd-label" htmlFor="cd-email">Пароль</label>
                    <input type="password" pattern=".{6,}" maxLength="15" required="required" className="form__input"/>
                  </div>
                  <div className="authentification">
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
                </fieldset>
                <div>
                  <input type="submit" value="Вхід"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthFormComponent;
