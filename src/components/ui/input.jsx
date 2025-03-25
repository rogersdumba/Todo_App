export const Input = ({ type, placeholder, value, onChange, className = '' }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`p-2 border border-gray-300 rounded ${className}`}
  />
);
