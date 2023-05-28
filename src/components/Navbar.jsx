export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Quantum Computation
      </a>
      <ul>
        <li>
          <a href="../pages/Developments">Developments</a>
        </li>
        <li>
          <a href="../pages/Facts">Fun Facts</a>
        </li>
        <li>
          <a href="../pages/Outlook">Future Outlook</a>
        </li>
        <li>
          <a href="../pages/References">References</a>
        </li>
      </ul>
    </nav>
  );
}
