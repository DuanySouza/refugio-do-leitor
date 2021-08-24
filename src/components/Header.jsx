import React, {Component} from 'react';
import Select from 'react-select';
import {withRouter} from 'react-router-dom';

import {HeaderTag} from '../styles'
import {FaSearch} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import logoSite from '../images/logoSite.png'

const options = [
  {label: 'Livro', value:'title'},
  {label: 'Autor', value:'author'}
]

class Header extends Component {

  chamarHome(){
    this.props.history.push('/')
  }

  chamarPesquisa(){
    const tipo = this.tipo
    const termo = this.termo

    if (termo) {
      this.props.history.push({
        pathname: '/pesquisa',
        search: `?tipo=${tipo}&q=${termo}`
      })
    }
  }

  eventoEnter = (event) => {
    if(event.key === 'Enter'){
      this.chamarPesquisa()
    }
  }

  tipo = options[0].value
  termo = ''

  render() {
    return (
      <HeaderTag>
        <img src={logoSite} alt="" onClick={() => this.chamarHome()}/>
        <div>
            <input onKeyPress={this.eventoEnter} onChange={(e) => this.termo = e.target.value} type="text" id="inputbusca" placeholder="Pesquisar no site..." alt="Pressione ENTER para buscar" autoComplete="off"></input>
            <button alt="Pesquisar" title="Pesquisar">
                <FaSearch style={{color: "#fff"}} size={20} onClick={() => this.chamarPesquisa()}/>
            </button>
        </div>
        <div style={{width:"80%", margin:"0 auto 0 0",}}>
          <Select options={options} 
                  onChange={(e) => this.tipo = e.value}
                  defaultValue={options[0]}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 3,
                    colors: {
                      ...theme.colors,
                      primary25: '#d8b9e7',
                      primary: '#3b3939',
                    },
                  })}
          />
        </div>
      </HeaderTag>
    )
  };
}



export default withRouter(Header);

