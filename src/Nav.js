import React from 'react';
import { NavContainer, NavItem } from './styles';
import { ROUTES } from './constants';

const Nav = () => (
    <NavContainer>
       <li><NavItem to={ROUTES.HOME}>Intro</NavItem></li> 
       <li><NavItem to={ROUTES.USE_STATE_1}>useState Example 1</NavItem></li> 
       <li><NavItem to={ROUTES.USE_STATE_2}>useState Example 2</NavItem></li> 
       <li><NavItem to={ROUTES.USE_EFFECT}>useEffect Example</NavItem></li> 
       <li><NavItem to={ROUTES.USE_CALLBACK}>useCallback Example</NavItem></li> 
       <li><NavItem to={ROUTES.USE_MEMO}>useMemo Example</NavItem></li> 
       <li><NavItem to={ROUTES.USE_REF}>useRef Example</NavItem></li> 
       <li><NavItem to={ROUTES.USE_REDUCER}>useReducer Example</NavItem></li> 
    </NavContainer>
);

export default Nav;