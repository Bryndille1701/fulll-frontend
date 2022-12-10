type IconProps = React.SVGProps<SVGSVGElement>;

const CheckboxIntermediate = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 19V5H5v14h14m0-16a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-2 8v2H7v-2h10z"
      ></path>
    </svg>
  );
};

export default CheckboxIntermediate;
