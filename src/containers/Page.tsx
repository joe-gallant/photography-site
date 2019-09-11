import React, { useState } from 'react';

const imageSetting = 'w_600,dpr_2.0';

const Page: React.FC = () => {
  return (
    <div>
      
      <h1 className="name clear-margin">London</h1>

      <div className="container">

        <div className="section">
          <img src={'https://res.cloudinary.com/joe-gallant/image/upload/' + imageSetting + '/v1568208171/Website/London/white-shirt3_ewvsby.jpg'} alt="London" />
        </div>
        <div className="section">
          <img src={'https://res.cloudinary.com/joe-gallant/image/upload/' + imageSetting + '/v1568208166/Website/London/the-hat2_ltjtr5.jpg'} alt="London" />
        </div>
        <div className="section">
          <img src={'https://res.cloudinary.com/joe-gallant/image/upload/' + imageSetting + '/v1568211295/Website/London/book-reading_zmaheh.jpg'} alt="London" />
        </div>
        <div className="section">
          <img src={'https://res.cloudinary.com/joe-gallant/image/upload/' + imageSetting + '/v1568208164/Website/London/bw-steps3_nupe1f.jpg'} alt="London" />
        </div>

      </div>
    </div>
  );
}

export default Page;
