import React from 'react';

import HeaderComponent from './header/HeaderComponent';
import AuthFormComponent from './forms/AuthFormComponent';
import CreateComponent from './create/CreateComponent';
import PetitionListComponent from './petition/PetitionListComponent';
import TagListComponent from './tag/TagListComponent';
import PopularListComponent from './popular/PopularListComponent';
import FooterComponent from './footer/FooterComponent';
import MoreBlockComponent from './more/MoreBlockComponent';

class PageComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <span id="anchor"></span>
        <HeaderComponent/>
        <AuthFormComponent/>
        <div className="main">
          <CreateComponent/>
          <div className="main-part">
            <div className="wrapper">
              <PetitionListComponent/>
              <div className="aside">
                <TagListComponent/>
                <PopularListComponent/>
                <FooterComponent/>
              </div>
            </div>
          </div>
        </div>
        <MoreBlockComponent/>
      </div>
    );
  }
}

export default PageComponent;
