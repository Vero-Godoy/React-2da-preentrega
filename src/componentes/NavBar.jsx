import { Link, Outlet } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#43bec4',
      color: '#212024',
      borderRadius: '8px',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
      padding: '10px',
    },
    link: {
      color: '#330775',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };


  return (
    <>
        <nav style={styles.navbar}>
            <ul style={styles.navLinks}>
                <li>
                    <Link to={"/"} style={styles.link}>Inicio</Link>
                </li>
                <li>
                    <Link to={"itemlistcontainer"} style={styles.link}>Productos</Link>
                </li>
                <li>
                    <Link to={"contactus"} style={styles.link}>Contacto</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
        <Outlet/>
    </>
  )


}

export default NavBar;


