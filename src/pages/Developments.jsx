export default function Developments() {
  return (
    <div className="component">
      <h1>Key Developments</h1>
      <ul>
        <li>
          <b>Quantum Supremacy</b>
          <p>
            In 2019, Google's quantum computer successfully demonstrated quantum
            supremacy by performing a calculation that would have taken
            classical computers thousands of years to complete. This milestone
            highlighted the potential of quantum computation and its ability to
            solve problems beyond the reach of classical systems.
          </p>
        </li>
        <li>
          <b>Error Correction</b>
          <p>
            Quantum systems are highly susceptible to errors caused by
            environmental noise. Significant progress has been made in
            developing error correction techniques to mitigate these errors and
            improve the reliability of quantum computations. Error correction is
            crucial for scaling up quantum computers to larger, more practical
            sizes.
          </p>
        </li>
        <li>
          <b>Quantum Algorithms</b>
          <p>
            Researchers have developed several quantum algorithms that leverage
            the power of quantum computation. One notable algorithm is Shor's
            algorithm, which can efficiently factor large numbers—a task that is
            computationally infeasible for classical computers. Quantum
            algorithms for optimization, machine learning, and simulation are
            also being explored.
          </p>
        </li>
      </ul>
    </div>
  );
}
