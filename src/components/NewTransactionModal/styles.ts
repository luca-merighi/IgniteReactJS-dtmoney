import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const ModalFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        padding: 0 1rem;
        height: 3rem;

        font: 400 1rem 'Poppins', sans-serif;

        outline: none;
        border: 2px solid #d7d7d7;
        border-radius: 0.25rem;
        
        &::placeholder {
            color: var(--text-body);
        }
        
        &:focus {
            border: 2px solid var(--blue);
        }
    }

    button[type="submit"] {
        margin-top: 1rem;

        background-color: var(--green);
        padding: 0 1rem;
        width: 100%;
        height: 3rem;

        color: #fff;
        font-size: 1rem;
        font-weight: 600;

        border: none;
        border-radius: 0.25rem;
  
        transition: background 0.3s, transform 0.3s;

        &:hover {
            transform: translateY(5px);
            filter: brightness(0.9);
            cursor: pointer;
        }

        &:focus {
            filter: brightness(0.9);
            outline: 2px solid var(--blue);
        }
  }
` 

export const TransactionTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean,
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 3rem;
    width: 100%;

    background-color: ${(props) => {
        return props.isActive 
        ? transparentize(0.8, colors[props.activeColor])
        : 'transparent'
    }};

    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &:hover {
        cursor: pointer;
        border-color: ${darken(0.1, '#d7d7d7')};
    }   

    &:focus {
        outline: 2px solid var(--blue);
    }   

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        font-size: 1rem;
        color: var(--text-title);
    }
`