export function GlidedeckLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="4" width="20" height="15" rx="2.5" fill="#1d4ed8" opacity="0.35" />
      <rect x="4" y="8" width="20" height="15" rx="2.5" fill="#2563eb" opacity="0.6" />
      <rect x="2" y="12" width="20" height="15" rx="2.5" fill="#2563eb" />
      <path d="M9 16.5L15.5 20L9 23.5V16.5Z" fill="white" />
    </svg>
  );
}
