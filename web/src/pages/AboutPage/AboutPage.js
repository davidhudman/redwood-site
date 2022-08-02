import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      {/* h1 page title with centered text */}
      <br />
      <h1 className="text-center">About</h1>
      <br />
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
      </main>
    </>
  )
}

export default AboutPage
