import React from 'react';

const DetailPost = () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col m6">
          <h3>judul</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="col m6">
          <div className="stats">
            <div className="image-wrapper">
              <img
                className="responsive-img"
                src="http://loremflickr.com/320/240"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
          <p>Along with a conservative dose of personality.</p>
        </div> */}
    </div>
  </section>
);

export default DetailPost;
