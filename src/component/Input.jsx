export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}) {
  // 유효성 검사를 위한 value=현재값, onChange=입력된 값을 외부에전달
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}
