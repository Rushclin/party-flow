interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
