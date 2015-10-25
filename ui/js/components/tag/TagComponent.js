import React from 'react';

class TagComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a href="" className="tag">{this.props.title}</a>
    );
  }
}

TagComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default TagComponent;
