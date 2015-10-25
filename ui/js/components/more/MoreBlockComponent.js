import React from 'react';

class MoreBlockComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="more-button-block">
        <div className="wrapper">
          <div className="more-block">
            <a href="#" className="more-petitions">Більше петицій</a>
          </div>
          <div className="up-block">
            <a href="#anchor" className="up">
              <i className="fa fa-chevron-up fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreBlockComponent;
