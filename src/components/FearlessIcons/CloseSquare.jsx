const Svg = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="2" fill="white" />
      <path d="M4.5 5L14.5 14.5" stroke="#009999" />
      <path d="M14.2539 4.75L4.75391 14.75" stroke="#009999" />
    </svg>
  );
};

export default function CloseSquared({ size = "19px", align = "2px" }) {
  return (
    <div
      style={{
        width: size,
        display: "flex",
        marginTop: align,
      }}
    >
      <Svg />
    </div>
  );
}
