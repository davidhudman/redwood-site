import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div style={{ width: '90%', margin: '0 auto' }}>
        {/* h1 page title with centered text */}
        <br />
        <h1 className="text-center">Home</h1>
        <br />
        <ArticlesCell />
      </div>
    </>
  )
}

export default HomePage
