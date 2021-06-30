import AddMoney from '../components/AddMoney/AddMoney'
import SendMoney from '../components/SendMoney/SendMoney'
import './Wallet.scss'

const Wallet = () => {
    return (
        <div className='Wallet'>
        <AddMoney />
        <SendMoney />
        </div>
    )
}

export default Wallet
