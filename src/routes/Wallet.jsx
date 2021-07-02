import Profile from '../components/Profile/Profile'
import SendMoney from '../components/SendMoney/SendMoney'
import AddMoney from '../components/AddMoney/AddMoney'
import RecentActivities from '../components/Activities/RecentActivities'
import CreditCard from '../UI/CreditCard/CreditCard'
import MenuTab from '../components/MenuTab/MenuTab'
import Wip from '../UI/Wip/Wip'
import './Wallet.scss'

const Wallet = () => {

    
    return (
        <div className='Wallet'>
        <Profile />
        <SendMoney />
        <AddMoney />
        <RecentActivities />
        <CreditCard />
        <MenuTab />
        <Wip />
        </div>
    )
}

export default Wallet;
