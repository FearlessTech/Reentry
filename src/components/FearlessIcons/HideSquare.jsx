const Svg = ({ background, color }) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="19" height="19" rx="2" fill={color} />
      <path
        d="M13.5 8L9.75 11.75L6 8"
        stroke={background}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default function CloseSquared({
  size = "19px",
  align = "2px",
  background = "#009999",
  color = "#ffffff",
}) {
  return (
    <div
      style={{
        width: size,
        display: "flex",
        marginTop: align,
      }}
    >
      <Svg background={background} color={color} />
    </div>
  );
}
