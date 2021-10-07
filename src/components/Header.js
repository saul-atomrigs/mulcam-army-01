import styles from './Header.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReactTooltip from 'react-tooltip';
import Login from './Login'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link to='/'>
          로고 자리
          {/* dailykpop.com */}
        </Link>

        {/* LOGIN */}
        <p data-tip="login">
          <nav className={styles.navigation}>
            <Login />
          </nav>
        </p>
        <ReactTooltip
          place='bottom'
          effect='solid' />
      </div>
    </header >
  )
}

export default Header