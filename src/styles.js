import styled, {createGlobalStyle} from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'RobotoMono';
        src: url('./fonts/RobotoMono-Thin.ttf');
    }

    @font-face {
        font-family: 'RobotoMonoRegular';
        src: url('./fonts/RobotoMono-Regular.ttf');
    }

    @font-face {
        font-family: 'RobotoMonoBold';
        src: url('./fonts/RobotoMono-Bold.ttf');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'RobotoMono', monospace;
    }

    body {

        background-image: linear-gradient( 185deg, #3E58AC, #B175DB, #7649BE);
       
    }
`;

export const HeaderTag = styled.header`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 25px;

   img{
       cursor: pointer;
   }

    div{

        input {
        height: 30px;
        width: 75%;
        border: none;
        border-bottom: 1px solid #fff;
        padding-left: 10px;
        font-size: 15px;
        font-weight: 500;
        line-height: 40px;
        color: #fff;
        font-style: normal;
        text-transform: none;
        background: 0 0;
        }  

        input::placeholder {
            color: #fff;
        }
        
        input:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            border-bottom: 1px solid #fff;
            outline: 0;
        }

        button {
            background: none;
            border: none;
            margin-top: 15px;
            cursor: pointer;
        }
    }

`;

export const BannerTag = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4em;

    div {
        text-align: center;
        margin: 40% auto;
        color: #fff;
        margin-left: 15px;
        margin-right:15px;

        h1{
            font-size: 45px;
            padding-bottom: 15px;
            color: #031920;
        }

        p{
            font-size: 24px;
        }
    }

    img{
        width: 100%;
    }
`;

export const BookTag = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding-right: 5em;
    padding-left: 5em;

    section {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 4em;

        color: #2A3135;

        div{
            flex: 1;
            img {
                flex: 1;
                padding: 0;
                margin: 5px 10px;
                box-shadow: 5px 0 5px 0px #333;
                width: 165px;
                height: 240px;
            }

            img:hover {
                transform: translateX(1px) scale(1.2);
            }
        }

        div{
            h1{
                font-size:30px;
                padding-bottom:18px;
                color: #031920;
            }

            p{
                font-size:18px;
                padding-bottom:20px;
                color: #fff;
            }

            button {
                background-color: #5965E0;
                color: #fff;
                padding: 15px;
                border: none;
                border-radius: 3px;
                font-size: 15px;
                font-family: 'RobotoMonoRegular', monospace;
            }

            button:hover{
                background:  rgba(0, 0, 0, 0.6);
            }
        }

        .information{
            margin-top: 50px;
        }
    }

    section:first-child{
        .information{
            padding-right:15px;
        }
    }

    section:last-child {

        .information{
            padding-left:15px;
        }

        div:last-child{
            writing-mode: vertical-rl;
        }
    }
`;

export const PublishersTag = styled.section`
    background-color: #22252A;
    color: #fff;
    border-radius: 0 150px 150px 0;
    margin-right: 10em;
    margin-top: 8em;
    margin-bottom: 12em;
    padding-left: 10em;
    text-align: center;

    section{
        max-width: 1100px;
        margin: 0 auto;
        padding: 50px 0px 70px;

        h1{
            margin-bottom: 50px;
            font-size:30px;
        }

        div{
            display: flex;
            justify-content: space-around;
            margin: 0 150px;

            img{
                height: 65px;
                width: 65px;
                border-radius: 100%;
                background-color: #fff;
            }
        }

        div:last-child{
            padding: 0 85px;
        }
        
    }
`;

export const FooterTag = styled.section`
     background-color: #22252A;
     padding: 0 0 40px;

     section{
        img{
            width: 370px;
            margin-top: -300px;
        }

        div{
            max-width: 1100px;
            margin: 0 auto;
            text-align: center; 

            p{
                color:#fff;
            }
        }
    }
`;

export const ExibeBuscaTag = styled.section`
    background-color: #fff;
    padding: 1em;
    margin-top: 2em;
    min-height: 1100px;
    
    section{
        max-width: 1100px;
        margin: 0 auto;
        padding: 5em 0;

        .exibe{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr; 
            margin-top: 3em;

            img{
                margin: 0 auto;
                width: 180px;
                height: 260px;
                border: 1px solid;
            }
            
            h2{
                margin-bottom: 0.5em;
            }
        }

        .avaliacao {
            margin-top: 1em;

            fieldset{
               margin-bottom: 1.5rem;

                legend{
                    font-family: 'RobotoMono', monospace;
                }
            }
           
        }

        button{
            padding: 8px 40px;
            display: block;
            width: 50%;
            margin-bottom: 0.5em;
            background: #e25e5e;
            border: none;
            color: #fff;
            border-radius: 3px;
            font-size:14px;
        }

        .leu{
            background-color: #8ec484;
        }

        .leu:hover{
            background-color:  #75b46a;
        }

        .lendo{
            background-color: #7bbcff;
        }

        .lendo:hover{
            background:#6aa9eb;
        }

        button:hover{
            background:#d74e4e;
        }
    }
`;

export const Modal = styled.div`
    div{
        border: 1px solid;
    }
`;
