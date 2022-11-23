import {useContext} from 'react';
import Context from './Context'

const LoggedOut = () => {
  const {login} = useContext(Context)
  return (
    <div>
      <button onClick={()=>{ login('guest') }}>Login</button>
    </div>
  )
}

const LoggedIn = () => {
  const {user, logout} = useContext(Context)
  return (
    <div>
      Welcome {user}!
      <div>
        <button onClick={()=>{ logout() }}>Logout</button>
      </div>
    </div>
  )
}

export default () => {
  const {user} = useContext(Context)
  return (
    <div>
      {user ? <LoggedIn /> : <LoggedOut />}
    </div>
  )
}