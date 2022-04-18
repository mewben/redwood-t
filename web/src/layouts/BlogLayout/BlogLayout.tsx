import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut, loading } = useAuth()

  const renderCurrent = () => {
    if (loading) return null

    if (!isAuthenticated) {
      return <Link to={routes.login()}>Login</Link>
    }

    return (
      <div>
        <span>Logged in as {currentUser.email}</span>{' '}
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {renderCurrent()}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
