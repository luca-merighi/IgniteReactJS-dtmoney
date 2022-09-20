import styled from 'styled-components'

export const SummaryContainer = styled.section`
    margin-top: -8rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;

    .transactions-card {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        color: var(--text-title);

        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;        
        }

        strong {
            font-size: 2rem;
            font-weight: 500;
        }

        &:last-of-type {
            background-color: var(--green);
            color: var(--shape);
        }
    }

    @media(min-width: 768px) {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            'incomes outcomes'
            'total total';

        .transactions-card:first-of-type {
            grid-area: incomes;
        }

        .transactions-card:nth-of-type(2) {
            grid-area: outcomes;
        }

        .transactions-card:last-of-type {
            grid-area: total;
        }
    }

    @media(min-width: 900px) {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
`