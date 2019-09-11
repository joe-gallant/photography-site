import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    title: 'London',
    link: 'london',
    bg: 'https://res.cloudinary.com/joe-gallant/image/upload/w_600,h_400,c_fit,dpr_2.0/v1568208166/Website/London/the-hat2_ltjtr5.jpg'
  }
]

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="name">Joe Gallant</h1>

      { pages.map(page =>

        <Link to={ '/' + page.link} className="box">
          <div className="box__bg" style={{ backgroundImage: `url(${page.bg})` }}></div>
          <span>{ page.title }</span>
        </Link>

      ) }
    </div>
  );
}

export default Home;
