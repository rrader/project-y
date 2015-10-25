import React from 'react';

class CreateComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="create">
          <div className="wrapper">
            <div className="create-wrapper">
              <div className="title">
                <h1>Тут буде якийсь тайтл...</h1>
              </div>
              <div className="more-title">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h4>
              </div>
              <a className="create-button" href="#">Створити петицію</a>
            </div>
          </div>
        </div>
        <div className="create-background"></div>
      </div>
    );
  }
}

export default CreateComponent;
