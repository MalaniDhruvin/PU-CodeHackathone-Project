import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (<>
    <nav id="nav">
      <div class="options">
        <Link to="/"><img src="logo.jpg" alt="" /></Link>
        <Link to="/">Home</Link>
        <Link to="/courses">Course</Link>
        <Link to="/quize">Practice</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/devai" target='blank'>Dev AI</Link>
      </div>
      <div class="login-options">
        <button class="login-btn">
          <svg
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 -960 960 960"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            title="Wallet"
          >
            <title>Wallet</title>
            <path
              d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"
            ></path>
          </svg>
          {isAuthenticated ? <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </p> : <p onClick={() => loginWithRedirect()}>Login</p>}

        </button>
        <div class="profile-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            stroke-width="0"
            fill="currentColor"
            stroke="currentColor"
            class="user-img"
          >
            <path
              d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </>)
}

export default Navbar;