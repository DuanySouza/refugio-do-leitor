import React, {useState, useEffect} from 'react';
import axios from 'axios';
import qs from 'qs';

import Select from 'react-select';

import {ExibeBuscaTag} from '../styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const options = [
    {label: 'Quero ler', value:'quero_ler'},
    {label: 'Lendo', value:'lendo'},
    {label: 'Já li', value:'ja_li'}

]

function Pesquisa() {

    async function pesquisar(offset, limit=10){
        const queryStrings = qs.parse(window.location.search, {ignoreQueryPrefix: true})
        const tipo = queryStrings.tipo
        const termo = queryStrings.q

        const api = axios.create ({
          baseURL:`https://openlibrary.org/search.json?${tipo}=${termo}&limit=${limit}&offset=${offset}&fields=author_name,title,isbn`
        })
        
        const resposta = await api.get('');
        const dados = resposta.data.docs;

        return dados
    }

    const [dados, setDados] = useState([])
    const [values, setValues] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    pesquisar(0).then(dados => {
        setDados(dados)
    })

    return (
        <ExibeBuscaTag>
            {
              dados.sort((dado1, dado2) => dado1.title < dado2.title ? -1 : 1)
              .map((dado, idx) => (
                <section>
                    <div className='exibe'>
                        <img src={dado.isbn ? `https://covers.openlibrary.org/b/isbn/${dado.isbn[0]}-M.jpg` : ""} />
                        <div>
                            <h2>Livro: {dado.title ? dado.title : ""}</h2>
                            <h3>Autor: {dado.author_name ? dado.author_name[0] : ""}</h3>
                            <div className='avaliacao'>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography component="legend">Avaliar:</Typography>
                                    <Rating name={`pristine-${idx}`} 
                                            value={values[idx]}
                                            onChange={(event, newValue) => {
                                            values[idx] = newValue
                                            setValues(values);
                                        }} />
                                </Box>
                            </div>
                            <div style={{width:"55%", margin:"0 auto 0 0",}}>
                                <Select options={options} 
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
                        </div>
                    </div>
                </section>
              ))
            }
        </ExibeBuscaTag>
    )
}

export default Pesquisa;