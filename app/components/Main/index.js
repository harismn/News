import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Switch, Route } from 'react-router-dom';
import gambar from '../../images/pertanian.jpg';

class Main extends React.Component {
    render() {
      return (
        <section
          id="hero"
          className="blue lighten-4"
          style={{ backgroundImage: 'url(' + gambar + ')'}}
        >
          <div className="container valign-wrapper jc-center">
            <div className="valign center-align white-text">
              <p className="flowtext hide-on-small-only">Info tentang pertanian sekarang bisa di akses dengan sentuhan jari</p>
              <h3>
                Selamat datang di InfoTani
              </h3>
    
              <p className="big">
                Apa yang ingin anda tanyakan kepada kami ?
              </p>
    
              <a href="/patients/add-appointment" className="btn waves-light waves-effect">Make Appointment</a>
              <a href='/service'className="btn waves-light waves-effect">service  </a>
              <a href = 'medical-records'className="btn waves-light waves-effect">Medical records</a>
              <a href='/billing' className="btn waves-light waves-effect">Billing   </a>

            </div>
          </div>
        </section>
      );
    };
  }    
export default Main;