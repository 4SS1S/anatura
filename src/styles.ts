import styled, { css, createGlobalStyle } from 'styled-components'

export const global = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: linear-gradient(45deg, #f93, #f2eee9);
        font-family: arial;
        widht: 100%;
        height: 100%;
    }

    header {
        width: 100%;
        height: 120px;
        background-color: #70419c;
        position: relative;

        img {
            position: absolute;
            left: 30%;
            top: 30%;
            transform: tranlate(-50%, -50%);
            border-radius: 100px;
            box-shadow: 4px 4px 10px #3336;
        }
    }

    main {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-item: center;
        margin-top: 75px;

        div {
            border-radius: 15px;
            background-color: #fff6;
            padding: 15px 20px;
            box-shadow: 10px 10px 8px #6666;

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style: none;
                    border: 2px solid #dedefedd;
                    // border-radius: 5px; 
                    margin-top: 8px;
                    transition: .3s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5px 15px;

                    :hover {
                        box-shadow: 2px 2px 8px #6666;
                    }

                    #whatsapp {
                        font-size: 20px;
                        color: #1bd741;
                    }

                    a {
                        display: block;
                        width: 100%;
                        text-decoration: none;
                        padding: 5px 20px;
                    }
                }
            }
        }
    }
`

export const HeaderImageComponent = styled.header``

