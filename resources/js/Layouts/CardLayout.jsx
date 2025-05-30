export default function CardLayout({ children, className = '' }) {
  return <div className={`bg-white px-8 py-4 ${className}`}>{children}</div>;
}
