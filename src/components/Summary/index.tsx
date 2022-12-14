import { useTransactions } from '../../hooks/useTransactions'

import { SummaryContainer } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <SummaryContainer>
            <div className="transactions-card">
                <header>
                    <p>
                        Receitas
                    </p>
                    <img 
                    src={incomeImg} 
                    alt="Ícone de receitas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            
            <div className="transactions-card">
                <header>
                    <p>
                        Despesas
                    </p>
                    <img 
                    src={outcomeImg} 
                    alt="Ícone de despesas" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            
            <div className="transactions-card">
                <header>
                    <p>
                        Total
                    </p>
                    <img 
                    src={totalImg} 
                    alt="Ícone de Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </SummaryContainer>
    )
}