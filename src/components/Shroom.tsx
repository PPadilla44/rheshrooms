type Props = {
  className?: string;
  cap?: string;
  title?: string;
};

// Simple original toadstool used as the logo and in the mushroom hunt.
export default function Shroom({ className, cap = "#e2513c", title }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path
        d="M24 36c0 10-2 18-2 20 0 3 4 4 10 4s10-1 10-4c0-2-2-10-2-20z"
        fill="#fff7e8"
        stroke="#5e3a24"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M4 34C4 18 17 6 32 6s28 12 28 28c0 3-3 5-6 5H10c-3 0-6-2-6-5z"
        fill={cap}
        stroke="#5e3a24"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M12 22c3-6 8-10 14-12" fill="none" stroke="#ffffff99" strokeWidth="3" strokeLinecap="round" />
      <circle cx="22" cy="24" r="4" fill="#fff" />
      <circle cx="40" cy="16" r="3" fill="#fff" />
      <circle cx="46" cy="28" r="4.5" fill="#fff" />
      <circle cx="31" cy="31" r="2.5" fill="#fff" />
    </svg>
  );
}
