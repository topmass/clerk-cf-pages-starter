import { SignedIn, SignedOut } from '@clerk/clerk-react'

export const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <SignedIn>
        <p>Welcome to our app! We're excited to have you here.</p>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to learn more about us.</p>
      </SignedOut>
    </div>
  )
}

export default About
