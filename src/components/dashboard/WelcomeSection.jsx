function readName() {
  try {
    const user = JSON.parse(localStorage.getItem("auraUser")) || {};
    return user.name || localStorage.getItem("auraName") || "User";
  } catch {
    return localStorage.getItem("auraName") || "User";
  }
}
function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 18) {
    return "Good evening";
  }
  if (hour >= 12) {
    return "Good afternoon";
  }
  return "Good morning";
}

function WelcomeSection({ habits }) {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.completed).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;
  const status = progress === 100 ? "Peak" : progress >= 50 ? "Near Peak" : "Building";

  return (
    <section className="welcome-section">
      <div>
        <h1>
          {getGreeting()}, {readName()}.
        </h1>
        <p>You&apos;ve completed {completed} of {total} habits today. Keep the momentum going.</p>
      </div>
      <div className="streak-card">
        <div className="progress-circle">
          {progress}%
        </div>
        <div>
          <span>DAILY PROGRESS</span>
          <strong>{status}</strong>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
