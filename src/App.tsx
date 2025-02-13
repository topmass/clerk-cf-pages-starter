import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './pages/About'

function App() {
  console.log('App component rendering');
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <div className="auth-container">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to Your App</h1>
                <SignedIn>
                  <p>You are signed in!</p>
                </SignedIn>
                <SignedOut>
                  <p>Please sign in to continue</p>
                </SignedOut>
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
