import styled from 'styled-components'

export const TransactionsTableContainer = styled.section`
    display: flex;
        align-items: center;
        justify-content: center;
    width: 100%;
        
    table {
        
        width: 100%;
        border-spacing: 0 0.5rem;

        thead {
            display: none;

            th {
                color: var(--text-body);
                font-weight: 400;
                padding: 1rem 2rem;
                text-align: left;
            }
        }

        tbody {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            width: 100%;

            tr {
                background-color: var(--shape);
                padding: 1.5rem 2rem;
                width: 100%;

                display: grid;
                gap: 0.5rem;
                grid-template-columns: 75% 25%;
                grid-template-areas: 
                    'title title'
                    'price price'
                    'category date';

                border-radius: 0.25rem;

                &.deposit td:nth-of-type(2) {
                    color: var(--green);
                }

                &.withdraw td:nth-of-type(2) {
                    color: var(--red);
                }

                td {
                    color: var(--text-title);
                }

                td:first-of-type {
                    grid-area: title;
                    font-size: 1.15rem;
                }

                td:nth-of-type(2) {
                    grid-area: price;
                    font-size: 2rem;
                }

                td:nth-of-type(3) {
                    grid-area: category;
                    color: var(--text-body);
                }

                td:last-of-type {
                    grid-area: date;
                    color: var(--text-body);
                }
            }
        }
    }

    @media(min-width: 768px) {
        table {
            thead {
                display: table-header-group;
                tr {
                    display: table-row;
                    th {
                        display: table-cell;
                    }
                }
            }

            tbody {
                display: table-row-group;
                tr {
                    display: table-row;
                    padding: 0;
                    td {
                        display: table-cell;
                        padding: 1.5rem 2rem;
                    }

                    td:first-of-type,
                    td:nth-of-type(2) {
                        font-size: 1rem;
                    }
                }
            }
        } 
    }
`