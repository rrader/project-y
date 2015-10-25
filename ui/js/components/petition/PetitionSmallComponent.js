import React from 'react';

import TagComponent from '../tag/TagComponent';

class PetitionSmallComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const tags = [];
    let key = 0;
    this.props.tags.forEach(tag => {
      tags.push(<TagComponent title={tag.title} key={key}/>);
      key++;
    });
    return (
      <div className="block">
        <div className="image">
          <img src={this.props.cover}/>
          <div className="cover-img"></div>
          <div className="progress-bar">
            <div className={'progress-radial progress-' + this.props.progress}>
              <div className="overlay">{this.props.progress + '/100'}</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="petition-title">
            <h4>{this.props.title}</h4>
          </div>
          <div className="petition-name">
            <p>{this.props.author}</p>
          </div>
          <div className="petition-content">
            <p>{this.props.description}</p>
          </div>
          <div className="petition-tags">
            {tags}
          </div>
          <div className="petition-buttons">
            <div className="time">{this.props.time}</div>
            <div className="btns">
              <a href="#" className="more">
                <i className="fa fa-expand"></i>
                Переглянути
              </a>
              <a href="#" className="vote">
                <i className="fa fa-heart"></i>
                Підтримати
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PetitionSmallComponent.propTypes = {
  cover: React.PropTypes.string,
  progress: React.PropTypes.number,
  title: React.PropTypes.string,
  author: React.PropTypes.string,
  description: React.PropTypes.string,
  tags: React.PropTypes.array,
  time: React.PropTypes.string,
};

export default PetitionSmallComponent;
