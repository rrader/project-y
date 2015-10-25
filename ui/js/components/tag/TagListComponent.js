import React from 'react';

import TagComponent from './TagComponent';

class TagListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [
        {
          title: 'Тег 1',
        },
        {
          title: 'Тег 2',
        },
        {
          title: 'Довгий тег',
        },
        {
          title: 'Тег 4',
        },
        {
          title: 'Трохи довший тег',
        },
        {
          title: 'Тег 2',
        },
        {
          title: 'Тег 3',
        },
        {
          title: 'Довгий тег',
        },
        {
          title: 'Тег 1',
        },
        {
          title: 'Тег 2',
        },
        {
          title: 'Трохи довший тег',
        },
        {
          title: 'Тег4',
        },
        {
          title: 'Тег 2',
        },
        {
          title: 'Трохи довший тег',
        },
        {
          title: 'Тег4',
        },
        {
          title: 'Тег1',
        },
        {
          title: 'Тег2',
        },
      ],
    };
  }
  render() {
    const tags = [];
    let key = 0;
    this.state.tags.forEach(tag => {
      tags.push(<TagComponent title={tag.title} key={key}/>);
      key++;
    });
    return (
      <div className="as tags">
        <h4>Популярні теги</h4>
        <div className="popular-tags">
          {tags}
        </div>
      </div>
    );
  }
}

export default TagListComponent;
