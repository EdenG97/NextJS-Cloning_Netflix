import EnjoyTv from "./profile_comp/EnjoyTv";
import KidsProfiles from "./profile_comp/KidsProfiles";
import WatchEveryWhere from "./profile_comp/WatchEverywhere";
import WatchOffline from "./profile_comp/WatchOffline";

const Profile = () => {
  return (
    <section>
      <EnjoyTv />
      <WatchOffline />
      <WatchEveryWhere />
      <KidsProfiles />
    </section>
  );
};

export default Profile;
