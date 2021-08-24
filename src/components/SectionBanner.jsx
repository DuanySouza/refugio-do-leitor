import React, {Component} from 'react';
import {BannerTag} from '../styles'
import bannerBook from '../images/bannerBook.png'

class SectionBanner extends Component {
  render() {
    return (
      <BannerTag>
       <div>
           <h1>Bem Vindo ao site do Leitor!</h1>
           <p>Onde você pode avaliar, comentar e saber sobre o mundo da leitura</p>
       </div>
       <img src={bannerBook} alt=""/>
      </BannerTag>
    )
  };
}



export default SectionBanner;
