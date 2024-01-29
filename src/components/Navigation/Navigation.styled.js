import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const NavigationWrap = styled.div`
    display: flex;
    gap: 40px;
`

export const NavigationLink = styled(NavLink)`
    display: inline-block;
    font-size: 16px;
    line-height: 1.25; 
    letter-spacing: -0.16px;
`