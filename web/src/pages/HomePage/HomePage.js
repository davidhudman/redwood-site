import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div
        style={{
          width: '100%',
          margin: '0 auto',
          maxWidth: '480px',
          padding: '2rem',
        }}
      >
        {/* h1 page title with centered text */}
        <h1 className="text-center">Home</h1>
        <br />
        <ArticlesCell />
      </div>
    </>
  )
}

export default HomePage
