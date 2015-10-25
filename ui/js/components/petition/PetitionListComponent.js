import React from 'react';

import PetitionSmallComponent from './PetitionSmallComponent';

class PetitionListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          cover: 'http://i.imgur.com/Puiq9kA.jpg',
          title: 'Назва петиції буде тут...',
          author: 'Іванов Іван',
          progress: 0,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: [
            {
              title: 'Тег 1',
            },
            {
              title: 'Тег 2',
            },
            {
              title: 'Тег 3',
            },
            {
              title: 'Тег 4',
            },
          ],
          time: '10 жовтня 2015',
        },
        {
          cover: 'http://i.imgur.com/Puiq9kA.jpg',
          title: 'Назва петиції буде тут...',
          author: 'Іванов Іван',
          progress: 25,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: [
            {
              title: 'Тег 1',
            },
            {
              title: 'Тег 2',
            },
          ],
          time: '10 жовтня 2015',
        },
        {
          cover: 'http://i.imgur.com/Puiq9kA.jpg',
          title: 'Назва петиції буде тут...',
          author: 'Іванов Іван',
          progress: 40,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: [
            {
              title: 'Тег 1',
            },
            {
              title: 'Тег 2',
            },
            {
              title: 'Тег 3',
            },
          ],
          time: '10 жовтня 2015',
        },
        {
          cover: 'http://i.imgur.com/Puiq9kA.jpg',
          title: 'Назва петиції буде тут...',
          author: 'Іванов Іван',
          progress: 75,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: [
            {
              title: 'Тег 1',
            },
            {
              title: 'Тег 2',
            },
            {
              title: 'Тег 3',
            },
            {
              title: 'Тег 4',
            },
          ],
          time: '10 жовтня 2015',
        },
        {
          cover: 'http://i.imgur.com/Puiq9kA.jpg',
          title: 'Назва петиції буде тут...',
          author: 'Іванов Іван',
          progress: 100,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: [
            {
              title: 'Тег 1',
            },
            {
              title: 'Тег 2',
            },
            {
              title: 'Тег 3',
            },
            {
              title: 'Тег 4',
            },
          ],
          time: '10 жовтня 2015',
        },
      ],
    };
  }
  render() {
    const petitions = [];
    let key = 0;
    this.state.data.forEach(petition => {
      petitions.push(
        <PetitionSmallComponent
          cover={petition.cover}
          progress={petition.progress}
          title={petition.title}
          author={petition.author}
          tags={petition.tags}
          description={petition.description}
          key={key}
        />);
      key++;
    });
    return (
      <div className="petitions">
        {petitions}
      </div>
    );
  }
}

export default PetitionListComponent;
