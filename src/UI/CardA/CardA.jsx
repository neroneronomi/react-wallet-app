import './CardA.scss'

const CardA = () => {
    return (
        <>
        <div className="card-a">
            <div className="textContent">
            <h3>Multiple Payment Method</h3>
            <span>Set up your payment method with PIE e-Wallet. The linking of commercial networks and enterprises</span>
            </div>
            <div className="creditCards">
            <img src="./images/paypal.png" alt="" />
                <img src="./images/visa.png" alt="" />
                <img src="./images/mastercard.png" alt="" />
            </div>
            <div className="wallets">
                <img src="./images/gcash.png" alt="" />
                <img src="./images/paymaya.png" alt="" />
            </div>
        </div> 
        </>
    )
}

export default CardA
