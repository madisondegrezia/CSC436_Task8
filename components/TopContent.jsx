import { getCurrentUser } from "../utils/data";

const { name, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      {avatar && (
        <img
          className="rounded-full mt-10"
          src={avatar}
          alt={name}
          height="140"
          width="140"
        />
      )}
      {name && <h1 className="h1">{name}</h1>}
    </div>
  );
};

export default TopContent;
