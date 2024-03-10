function TextInput({
  label = "label",
  type = "text",
  inputmode = "none",
  value,
  setValue,
  placeholder = "",
  dir = "rtl",
}) {
  return (
    <div dir={dir} className="flex items-center justify-between gap-2 max-[400px]:items-stretch max-[400px]:flex-col">
      <span>{label}</span>
      <input
        className="rounded-lg  border bg-primary-light px-2 py-1 outline-none  dark:border-gray-600 dark:bg-primary-dark dark:text-secondary-dark focus:dark:border-gray-50"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default TextInput;
{
}
