import { width } from "@mui/system";

export function UserImage({ source }, props) {
  return (
    <img
      src="/images/user.svg"
      alt="user image"
      srcSet={source ? `${source}, /images/user.svg` : "/images/user.svg"}
      onError={(e) => {
        e.target.removeAttribute("srcset");
        e.target.onError = null;
      }}
    />
  );
}
