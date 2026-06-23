interface LineProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function Line2({ className, style }: Readonly<LineProps>) {
  return (
    <svg
      width="59"
      height="7"
      viewBox="0 0 59 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M1 5.5L6.73524 2.27393C7.90982 1.61322 9.39554 2.18662 9.82171 3.46512V3.46512C10.1963 4.58895 11.411 5.19632 12.5349 4.82171L21.2649 1.9117C22.8983 1.36724 24.6968 1.92905 25.7298 3.30643L26.497 4.32936C27.6569 5.87587 29.7568 6.37159 31.4859 5.50706L38.0285 2.23576C39.5159 1.49203 41.3084 1.74625 42.5304 2.87426L44.9319 5.09099C46.1725 6.23613 47.9985 6.47906 49.4953 5.69811L58.5 1"
        stroke="#ef5e25"
      />
    </svg>
  );
}
