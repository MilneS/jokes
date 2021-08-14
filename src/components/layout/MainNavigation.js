import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {

    return (
        <header className={classes.header}>
            <NavLink className={classes.logo} to="/jokes">Great jokes</NavLink>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/jokes' activeClassName={classes.active}>All jokes</NavLink></li>
                    <li><NavLink to='/new-joke' activeClassName={classes.active}>Add a joke</NavLink></li>
                </ul>
            </nav>
        </header>
    )
  };
  
  export default MainNavigation;