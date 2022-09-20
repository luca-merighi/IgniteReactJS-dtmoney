import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    :root {
        --background: #f8f2f5;
        --red: #E52E4C;
        --green: #33cc95;
        --blue: #5429cc;
        
        --blue-light: #6933ff;
        
        --text-title: #363f5f;
        --text-body: #969c83;
        
        --shape: #ffffff;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        background-color: var(--background);
        padding: 3rem;
        margin: 0 1rem;

        width: 100%;
        max-width: 576px;
        
        position: relative;

        border-radius: 0.25rem;

        outline: none;
    }

    .react-modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;

        background-color: var(--background);
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 0.25rem;

        transition: background 0.3s;

        &:hover {
            background-color: #e9e3e6;
            cursor: pointer;
        }
        
        &:focus {
            background-color: #e9e3e6;
            outline: 2px solid var(--blue);
        }
    }
`