import logo from '../logo.svg';

export default function Header(props) {
  return (
    <header style={{ marginBottom: "2em" }} className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ color: "white", margin: "0.5em auto" }}>Let's learn React!</h1>
    </header>
  )
}