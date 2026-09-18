import profileImage from "../../../assets/images/profile.png";

function ProfileHero({ name, email }) {
  return (
    <div className="profile-hero">
      <div className="profile-avatar-wrap">
        <img src={profileImage} alt="Profile" className="profile-avatar" />
      </div>

      <div className="profile-header-main">
        <h1>{name}</h1>
        <p>{email}</p>

        <div className="profile-badges">
          <span className="profile-badge premium">Premium Member</span>
          <span className="profile-badge streak">Top 5% Habit Streak</span>
        </div>
      </div>

      <button type="button" className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileHero;
