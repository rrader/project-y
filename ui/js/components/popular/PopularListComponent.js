import React from 'react';

import PopularPetitionComponent from './PopularPetitionComponent';

class PopularListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      petitions: [
        {
          link: '#',
          progress: 25,
          title: 'Відповідь Президента на петиції',
          author: 'Шевченко Тарас',
        },
        {
          link: '#',
          progress: 65,
          title: 'Підвищення стипендії студентам',
          author: 'Франко Іван',
        },
        {
          link: '#',
          progress: 50,
          title: 'Обмеження голосування за віком',
          author: 'Куліш Пантелеймон',
        },
        {
          link: '#',
          progress: 25,
          title: 'Щоквартальний звіт Президента',
          author: 'Котляревський Іван',
        },
        {
          link: '#',
          progress: 85,
          title: 'Перегляд мінімальної заробітньої плати',
          author: 'Сковорода Григорій',
        },
      ],
    };
  }

  render() {
    const petitions = [];
    let index = 1;
    this.state.petitions.forEach(petition => {
      petitions.push(
        <PopularPetitionComponent
          index={index}
          link={petition.link}
          progress={petition.progress}
          title={petition.title}
          author={petition.author}
          key={index}
        />);
      index++;
    });
    return (
      <div className="as popular">
        <h4>Популярні петиції</h4>
        <div className="popular-petitions">
          {petitions}
        </div>
      </div>
    );
  }
}

export default PopularListComponent;
