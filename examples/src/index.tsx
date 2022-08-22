import * as React from 'react'
import ReactDOM from 'react-dom'

function AppRoot(): React.ReactElement {
  const [someState, setSomeState] = React.useState<number>(0)

  React.useEffect(() => {
    setSomeState('valueOfWrongType')
    console.log(someState)
  }, [])

  return (
    <React.StrictMode>
      <React.Suspense fallback={null}>
        <h1
          children='Hello, world!'
          onMouseOver={() => {
            console.log('Callback without memoization and name')
          }}
        />
      </React.Suspense>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppRoot />, document.getElementById('root'))
