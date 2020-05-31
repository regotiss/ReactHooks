import React from 'react';
import  { Link } from 'react-router-dom';
import { NavContainer } from './styles';
import { ROUTES } from './constants';

const Nav = () => (
    <NavContainer>
       <li><Link to={ROUTES.HOME}>Intro</Link></li> 
       <li><Link to={ROUTES.USE_STATE_1}>useState Example 1</Link></li> 
       <li><Link to={ROUTES.USE_STATE_2}>useState Example 2</Link></li> 
       <li><Link to={ROUTES.USE_EFFECT}>useEffect Example</Link></li> 
       <li><Link to={ROUTES.USE_CALLBACK}>useCallback Example</Link></li> 
    </NavContainer>
);

export default Nav;