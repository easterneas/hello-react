import { Link } from 'react-router-dom'

// Session 8 - Component Styling
const unorderedList = {
  marginBottom: "1em",
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "0.5em"
}

export default function Sidebar() {
  return (
    <div style={{ padding: "0 0.5em", textAlign: "left", height: "100vh", overflowY: "auto" }}>
      <div>
        <ul style={ unorderedList }>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      {/* Session 4: Intro to React (dan juga Component) */}
      <div>
        <h4>Session 4</h4>
        <ul style={ unorderedList }>
          <li><Link to="/class-component">Class Component</Link></li>
          <li><Link to="/functional-component">[Functional] Component</Link></li>
        </ul>
      </div>

      {/* Session-session ini akan menggunakan Functional Component */}

      {/* Session 5-6: State, Props, Stateful, dan Stateless Component */}
      <div>
        <h4>Session 5-6</h4>
        <ul style={ unorderedList }>
          <li><Link to="/stateful-component">Component with State [Stateful Component]</Link></li>
          <li><Link to="/stateless-component">Component with Props [Stateless Component]</Link></li>
        </ul>
      </div>

      {/* Session 7: [Functional] Component Lifecycle */}
      <div>
        <h4>Session 7</h4>
        <ul style={ unorderedList }>
          <li><Link to="/component-lifecycle">Component Lifecycle/Hooks</Link></li>
          <li><Link to="/api">API fetching</Link></li>
        </ul>
      </div>

      {/* Session 10: State Management dengan Redux (dan React Redux) */}
      <div>
        <h4>Session 10</h4>
        <ul style={ unorderedList }>
          <li><Link to="/redux">Redux (dan React Redux)</Link></li>
        </ul>
      </div>

      {/* Session 11: React Redux dengan Middleware (untuk async function) */}
      <div>
        <h4>Session 11</h4>
        <ul style={ unorderedList }>
          <li><Link to="/redux-with-middleware">Redux with Middleware</Link></li>
        </ul>
      </div>
    </div>
  )
}