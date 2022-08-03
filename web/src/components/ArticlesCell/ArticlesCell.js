import Article from 'src/components/Article'
export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => {
  return (
    <>
      <div
        id="article-cell-loading"
        className="rw-text-center"
        style={{
          fontStyle: 'italic',
        }}
        onLoad={setInterval(
          (counter) => {
            counter++
            document.getElementById(
              'article-cell-loading'
            ).innerHTML = `Loading... ${counter} sec`
          },
          1000,
          0
        )}
      >
        Loading...0 sec
      </div>
    </>
  )

  // setTimeout(() => {
  //   document.getElementById('article-cell-loading').style.display = 'none'
  // } , 1000)
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <Article key={article.id} article={article} />
  ))
}
