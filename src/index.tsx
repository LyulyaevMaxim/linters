import * as React from 'react'
import ReactDOM from 'react-dom'

function AppRoot(): React.ReactElement {
  return (
    <React.StrictMode>
      <React.Suspense fallback={null}>
        <h1 children='Hello, world!' />
      </React.Suspense>
    </React.StrictMode>
  )
}

ReactDOM.render(<AppRoot />, document.getElementById('root'))
