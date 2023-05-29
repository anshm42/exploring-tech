export default function Home() {
  return (
    <div className="component">
      <h1>Quantum Computation</h1>
      <h2>Ansh Maru</h2>
      <p>
        Quantum computation is a rapidly evolving field that explores the
        principles and applications of quantum mechanics in information
        processing. Unlike classical computers, which store and manipulate
        information using bits (0s and 1s), quantum computers use quantum bits
        or qubits, which can exist in multiple states simultaneously thanks to
        the phenomenon of superposition and entanglement. This unique property
        of qubits enables quantum computers to perform complex computations much
        faster than classical computers for certain types of problems. On the
        left, there is an image of Google's Quantum Computer, an example of a
        computer which uses these concepts.
      </p>
      <img
        src="src/assets/google-q-computer.jpg"
        className="google-comp"
        alt="Google's Quantum Computera"
      />
    </div>
  );
}
