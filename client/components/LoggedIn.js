import { useContext } from 'react'
import { useRouter } from 'next/router'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon.js'
import UserContext from './UserContext'
import Avatar from './Avatar'

export default function LoggedIn(){
  const router = useRouter()
  const {user, logout} = useContext(UserContext)
  function onClick() {
    if (user)
      router.push('/profile')
    else
      router.push('/login')
  }
  return (
    <button
      className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
      onClick={onClick}
    >
      {user ?
        <>
          <Avatar />
          {user.user_metadata.name}
        </>
        :
        <>
          <OutlineUserCircleIcon />
          Login
        </>
      }
    </button>
  )
}
