export default function Facts() {
  return (
    <div className="component">
      <h1>Fun Facts</h1>

      <ol>
        <li>
          <b>Qubit Count</b>
          <p>
            Quantum computers today have relatively small qubit counts,
            typically ranging from tens to a few hundred. However, efforts are
            underway to scale up the qubit count to thousands or even millions
            to achieve more practical quantum computations.
          </p>
        </li>
        <li>
          <b>Quantum Entanglement</b>
          <p>
            Quantum entanglement is a phenomenon where qubits become correlated,
            even when physically separated. This property allows for the
            creation of secure communication channels and enables faster
            computations in some cases.
          </p>
        </li>
        <li>
          <b>Quantum Simulators</b>
          <p>
            Quantum simulators, which are quantum computers designed to simulate
            quantum systems, have already found applications in various fields
            such as material science, drug discovery, and optimization problems.
          </p>
        </li>
      </ol>
    </div>
  );
}
