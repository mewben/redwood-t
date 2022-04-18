import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

const LogoutPage = () => {
  const { logOut } = useAuth()

  const doLogout = async () => {
    await logOut()
    navigate(routes.home())
  }

  useEffect(() => {
    doLogout()
  }, [])

  return (
    <>
      <MetaTags title="Logout" description="Logout page" />

      <h1>Logging out...</h1>
    </>
  )
}

export default LogoutPage
