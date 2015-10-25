import React from 'react';

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="left-buttons">
            <a className="logo cd-logo" href="#">#kpi-petitions</a>
            <ul className="menu">
              <a href="#" className="active">
                <li>Активні петиції</li>
              </a>
              <a href="#" className="new">
                <li>Нові петиції</li>
              </a>
              <a href="#" className="archive">
                <li>Архів петицій</li>
              </a>
            </ul>
            <div className="search">
              <form role="search" method="get" id="searchform" action="">
                <label htmlFor="s">
                  <i className="fa fa-search"></i>
                </label>
                <input type="text" value="" placeholder="search" className="" id="s" />
              </form>
            </div>
          </div>
          <div className="right-buttons">
            <nav className="main-nav">
              <ul className="sign">
                <li>
                  <button type="button" className="btn btn-primary btn-lg registration" data-toggle="modal" data-target="#myModal">Реєстрація</button>
                </li>
                <li>
                  <button type="button" className="btn btn-primary btn-lg signin" data-toggle="modal" data-target="#myModal">Вхід</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
