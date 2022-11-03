import { useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../../Context/Auth';

/**
 * If the user is logged in and has the capability to do what the capability prop says, then return the
 * children.
 */
const Auth = ({capability, children}) => {
  const {isLoggedIn, can} = useContext(AuthContext);

  return (
    /* It's a ternary operator. If the condition is true, then it will return the children. */
    <When condition={isLoggedIn && can(capability)}>
      { children }
    </When>
  )
}

export default Auth;
