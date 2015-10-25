import React from 'react';

class PopularPetitionComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a href={this.props.link} className="pop-petition">
        <div className="row">
          <div className="col-xs-6 col-md-2 mini-bar">
            <div className="mini-progress-bar">
              <div className={'mini-progress-radial mini-progress-' + this.props.progress}>
                <div className="mini-overlay">{this.props.index}</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-9 mini-title border">
            <h4>{this.props.title}</h4>
            <p>{this.props.author}</p>
          </div>
        </div>
      </a>
    );
  }
}

PopularPetitionComponent.propTypes = {
  link: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  progress: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
};

export default PopularPetitionComponent;
