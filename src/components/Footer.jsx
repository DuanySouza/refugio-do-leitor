import React, {Component} from 'react';
import {FooterTag} from '../styles';
import readBook from '../images/girlReadBook.png'

class Footer extends Component {
  render() {
    return (
      <FooterTag>
          <section>
              <img src={readBook}/>
              <div>
                  <p>Desenvolvido por: Duany Souza</p>
              </div>
          </section>
      </FooterTag>
    )
  };
}



export default Footer;