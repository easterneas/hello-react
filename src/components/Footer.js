import './styles/Footer.css';

export default function Footer({ batchName }) {
  return (
    <footer className="footer">
      Copyright &copy; 2021, { batchName }.
    </footer>
  )
}