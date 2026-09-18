import StatCard from "./StatCard";
function AchievementsPage({ completedCount, longestStreak, totalCount }) {
  const progress = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;
  return (
    <section className="simple-page">
      <h1>Achievements</h1>
      <p>Your habit wins update when you complete habits.</p>

      <div className="simple-grid">
        <StatCard label="Today" value={`${completedCount}/${totalCount}`} />
        <StatCard label="Progress" value={`${progress}%`} />
        <StatCard label="Best Streak" value={`${longestStreak} days`} />
      </div>
    </section>
  );
}
export default AchievementsPage;



