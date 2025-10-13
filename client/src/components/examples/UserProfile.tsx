import UserProfile from "../UserProfile";

export default function UserProfileExample() {
  return (
    <div className="p-8 max-w-md">
      <UserProfile
        name="Rajesh Kumar"
        level="Intermediate"
        xp={750}
        nextLevelXp={1000}
      />
    </div>
  );
}
