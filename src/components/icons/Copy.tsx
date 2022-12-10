type IconProps = React.SVGProps<SVGSVGElement>;

const CopyIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 21H8V7h11m0-2H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2m-3-4H4a2 2 0 00-2 2v14h2V3h12V1z"
      ></path>
    </svg>
  );
};

export default CopyIcon;
