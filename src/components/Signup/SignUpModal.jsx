import Popup from 'reactjs-popup'
import SignupMultiStep from './SignUpMultiStep';
import 'reactjs-popup/dist/index.css';
import './SignUpModal.scss'

const SignUpModal = () => {
    return (
    <Popup
    trigger={<button className='signup-btn'>Create Account</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Register <i className="fas fa-pizza-slice"></i></div>
        <div className="content">
        <SignupMultiStep />
        </div>
      </div>
    )}
  </Popup>
    )
}

export default SignUpModal;
