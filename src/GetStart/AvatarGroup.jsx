import avatar1 from "./GSimage/avatar-01.png";
import avatar2 from "./GSimage/avatar-02.png";
import avatar3 from "./GSimage/avatar-03.png";
import avatar4 from "./GSimage/avatar-04.png";


export default function AvatarGroup() {
  const avatars = [avatar1, avatar2, avatar3, avatar4];

  return (
    <div className="flex items-center space-x-[-10px]">
      {avatars.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`avatar-${index}`}
          className="w-12 h-12 rounded-full border-2 border-transparent"
        />
      ))}
    </div>
  );
}