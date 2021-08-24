import React, {Component} from 'react';
import {PublishersTag} from '../styles';
import logoSeguinte from '../images/editoras/logoSeguinte.png'
import logoIntrinseca from '../images/editoras/logoIntrinseca.png'
import logoArqueiro from '../images/editoras/logoArqueiro.png'
import logoGalera from '../images/editoras/logoGalera.jpg'
import logoSextante from '../images/editoras/logoSextante.jpg'

class SectionPublishers extends Component {
  render() {
    return (
      <PublishersTag>
       <section>
           <h1>Melhores Editoras</h1>
           <div>
                <img src={logoSeguinte} alt="Editora Seguinte" title="Seguinte"/>
                <img src={logoIntrinseca} alt="Editora Intrinseca" title="Intrinseca"/>
                <img src={logoArqueiro} alt="Editora Arqueiro" title="Arqueiro"/>
                <img src={logoGalera} alt="Editora Galera" title="Galera"/>
                <img src={logoSextante} alt="Editora Sextante" title="Sextante"/>
           </div>
           <div>
                <img src={logoGalera} alt="Editora Galera" title="Galera"/>
                <img src={logoSextante} alt="Editora Sextante" title="Sextante"/>
                <img src={logoIntrinseca} alt="Editora Intrinseca" title="Intrinseca"/>
                <img src={logoSeguinte} alt="Editora Seguinte" title="Seguinte"/>
           </div>
       </section>
      </PublishersTag>
    )
  };
}



export default SectionPublishers;