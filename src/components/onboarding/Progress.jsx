function Progress({ step }) {
  return (
    <p className="progress">
      {String(step + 1).padStart(2, "0")}
      <span>/03</span>
    </p>
  );
}

export default Progress;