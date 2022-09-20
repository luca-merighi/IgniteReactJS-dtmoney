import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: var(--blue);

    nav {
        max-width: 1120px;
        margin: 0 auto;

        padding: 2rem 1rem 10rem 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button[type=button] {
            font: 500 1rem 'Poppins';
            color: var(--shape);

            background-color: var(--blue-light);
            padding: 0 2rem;
            height: 3rem;
            
            border: none;
            border-radius: 0.25rem;
            transition: background 0.3s, transform 0.3s;

            &:hover {
                filter: brightness(0.95);
                cursor: pointer;
                transform: translateY(3px);
            }

            &:focus {
                filter: brightness(0.95);
                outline: 2px solid var(--shape);
            }
        }
    }
`