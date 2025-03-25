export const Card = ({ children, className = '' }) => (
    <div className={`p-4 bg-white rounded shadow ${className}`}>{children}</div>
  );
  
  export const CardContent = ({ children, className = '' }) => (
    <div className={`p-2 ${className}`}>{children}</div>
  );
  