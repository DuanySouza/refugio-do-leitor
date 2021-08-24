import React, {useState} from 'react';
import {BookTag} from '../styles'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import aristoteles from '../images/livros/aristoteles.jpg'
import vermelho from '../images/livros/vermelho.jpg'
import teto from '../images/livros/teto.jpg'
import corte from '../images/livros/corte.jpg'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));  

function SectionBooks(){ 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <BookTag>
          <section>
              <div>
                  <div>
                      <img src={aristoteles} alt=""/>
                      <img src={vermelho} alt=""/>
                  </div>
                  <div>
                      <img src={teto} alt=""/>
                      <img src={corte} alt=""/>
                  </div>
              </div>
              <div className="information">
                  <h1>Últimos lançamentos</h1>
                  <p><p>Fique sabendo dos ultimos lançamentos no mundo da literura e descubra novas leituras para se aventurar.</p></p>
                  <button type="button" onClick={handleOpen} >Veja a lista completa</button>
              </div>
          </section>
          <section>
              <div className="information">
                    <h1>Mais procurados</h1>
                    <p>Quer saber o que os queridinhos do momento? Só ver a nossa lista completa e descobrir qual chama sua atenção.</p>
                    <button type="button" onClick={handleOpen}> Veja a lista completa</button>
              </div>
              <div>
                  <div>
                      <img src={vermelho} alt=""/>
                      <img src={corte} alt=""/>
                  </div>
                  <div>
                      <img src={aristoteles} alt=""/>
                      <img src={teto} alt=""/>
                  </div>
              </div>
          </section>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Ops...</h2>
                    <p id="transition-modal-description">Página em construção, em breve teremos novidades 🏗️</p>
                </div>
                </Fade>
            </Modal>
        </BookTag>
      )
    
}



export default SectionBooks;
