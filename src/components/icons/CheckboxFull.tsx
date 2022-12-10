type IconProps = React.SVGProps<SVGSVGElement>;

const CheckboxFull = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 19H5V5h10V3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-8h-2m-11.09-.92L6.5 11.5 11 16 21 6l-1.41-1.42L11 13.17l-3.09-3.09z"
      ></path>
    </svg>
  );
};

export default CheckboxFull;
