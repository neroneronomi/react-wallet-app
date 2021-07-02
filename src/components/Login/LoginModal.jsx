import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import LoginForm from './LoginForm';


const LoginModal = () => {
    return (
        <Popup
        trigger={<button className='login-btn'>Sign In <i className="fas fa-sign-in-alt"></i></button>}
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Login <i className="fas fa-pizza-slice"></i></div>
            <div className="content">
            <LoginForm />
            </div>
          </div>
        )}
      </Popup>
    )
}

export default LoginModal
