type IconProps = React.SVGProps<SVGSVGElement>;

const DeleteIcon = (props: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"
      ></path>
    </svg>
  );
};

export default DeleteIcon;
