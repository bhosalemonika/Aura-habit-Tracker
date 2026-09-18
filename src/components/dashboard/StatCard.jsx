function StatCard({ label, value }) {
  return (
    <div className="simple-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default StatCard;


