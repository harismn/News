import React from 'react';
import Article from '../Article';

const LatestNews = () => {
  return (
    <section id="news">
      <div className="container">
        <h1>Latest News</h1>
        <div className="row">
          <div className="col m4">
            <Article />
          </div>
          <div className="col m4">
            <Article />
          </div>
          <div className="col m4">
            <Article />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
