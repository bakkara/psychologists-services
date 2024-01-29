
import { NavigationLink, NavigationWrap } from './Navigation.styled'

const Navigation = () => {
  return (
    <NavigationWrap>
        <NavigationLink to='/'>Home</NavigationLink>
        <NavigationLink to='/catalog'>Psychologists</NavigationLink>
        {/* <NavigationLink to='/favorites'>Favorites</NavigationLink> */}
    </NavigationWrap>
  )
}

export default Navigation
