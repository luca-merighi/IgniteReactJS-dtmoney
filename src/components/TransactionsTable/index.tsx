import { useTransactions } from '../../hooks/useTransactions'
import { TransactionsTableContainer } from './styles'

export function TransactionsTable() {
    const {transactions} = useTransactions()

    return (
        <TransactionsTableContainer>
            <table>
                <thead>
                    <tr>
                        <th>
                            Título
                        </th>
                        <th>
                            Valor
                        </th>
                        <th>
                            Categoria
                        </th>
                        <th>
                            Data
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr 
                            key={transaction.id}
                            className={transaction.type}>
                                <td>
                                    {transaction.title}
                                </td>
                                <td>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>
                                    {transaction.category}
                                </td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR')
                                        .format(
                                            new Date(transaction.createdAt)
                                        )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </TransactionsTableContainer>
    )
}