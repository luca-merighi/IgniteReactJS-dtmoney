import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <HeaderContainer>
            <nav>
                <img 
                src={logoImg} 
                alt="Logo dtmoney" />

                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}>
                        Nova Transação
                </button>
            </nav>
        </HeaderContainer>
    )
}