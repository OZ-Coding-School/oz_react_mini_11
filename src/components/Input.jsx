function Input({ id, label, type, placeholder, hideLabel = false }) {
  return (
    <>
      {!hideLabel && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full py-4 px-8 rounded-md outline-none bg-[#96969644] text-base text-white"
      />
    </>
  );
}

export default Input;
