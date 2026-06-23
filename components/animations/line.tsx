interface LineProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Line({ className, style }: Readonly<LineProps>) {
  return (
    <svg
      width="81"
      height="32"
      viewBox="0 0 81 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M30.3088 1.00773C22.1421 0.841061 4.90879 3.30773 1.30879 14.5077C-2.29121 25.7077 26.4755 29.8411 41.3088 30.5077C54.1421 30.8411 79.9088 28.1077 80.3088 14.5077C80.8088 -2.49228 33.8088 0.507721 27.8088 5.50772"
        stroke="#ef5e25"
      />
    </svg>
  );
}
