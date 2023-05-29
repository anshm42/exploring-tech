import qubitImg from "../images/qubit.svg";

export default function Facts() {
  return (
    <div className="component">
      <h1> What exactly is a Qubit?</h1>
      <img className="qubit-svg" src={qubitImg} alt="Qubit infographic" />
      <h1>Fun Facts</h1>

      <ul>
        <li>
          <b>Qubit Count</b>
          <div>
            Quantum computers today have relatively small qubit counts,
            typically ranging from tens to a few hundred. However, efforts are
            underway to scale up the qubit count to thousands or even millions
            to achieve more practical quantum computations.
          </div>
        </li>
        <li>
          <b>Quantum Entanglement</b>
          <div>
            Quantum entanglement is a phenomenon where qubits become correlated,
            even when physically separated. This property allows for the
            creation of secure communication channels and enables faster
            computations in some cases.
          </div>
        </li>
        <li>
          <b>Quantum Simulators</b>
          <div>
            Quantum simulators, which are quantum computers designed to simulate
            quantum systems, have already found applications in various fields
            such as material science, drug discovery, and optimization problems.
          </div>
        </li>
      </ul>
    </div>
  );
}
