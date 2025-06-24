export default function AuthInput({
  label,
  type,
  value,
  onChange,
  name,
  error,
  placeholder,
}) {
  return (
    <div className="flex flex-col mb-4 ">
      <label className="mb-1 font-semibold text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded bg-white"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
