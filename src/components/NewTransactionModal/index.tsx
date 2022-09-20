import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { ModalFormContainer, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()
    
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()        
       
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay">
            <button 
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img 
                src={closeImg} 
                alt="Ícone para fechar Modal" />
            </button>

            <ModalFormContainer onSubmit={handleCreateNewTransaction}>
                <h2>
                    Cadastrar Transação
                </h2>

                <input 
                type="text"
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)} />

                <input 
                type="number"
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type == 'deposit'}
                        onClick={
                            () => {setType('deposit')}
                        }
                        activeColor="green">
                            <img 
                            src={incomeImg} 
                            alt="Ícone de Receita" />
                            <span>Receita</span>    
                    </RadioBox>                   
                    
                    <RadioBox
                        type="button"
                        isActive={type == 'withdraw'}
                        onClick={
                            () => {setType('withdraw')}
                        }
                        activeColor="red">
                            <img 
                            src={outcomeImg} 
                            alt="Ícone de Despesa" />
                            <span>Despesa</span>    
                    </RadioBox>                   
                </TransactionTypeContainer>

                <input 
                type="text"
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)} />

                <button type="submit">
                    Cadastrar
                </button>
            </ModalFormContainer>
        </Modal>
    )
}