export function UserImage({ source }, props) {
  return (
    <img src="/images/user.svg" alt="" srcSet={`${source}, /images/user.svg`} />
  );
}
