function TextInput({
  label = "label",
  type = "text",
  inputmode = "none",
  value,
  setValue,
  placeholder = "",
  dir = "rtl",
  regexPattern,
  maxLength = Infinity,
  minLength = -Infinity,
  required = false,
}) {
  function onChangeInput(event) {
    const inputText = event.target.value;

    if (!regexPattern||!inputText) {
      setValue(inputText);
    } else if (regexPattern.test(inputText) && inputText.length < maxLength) {
      setValue(inputText);
    }
  }
  return (
    <div
      dir={dir}
      className="flex items-center justify-between gap-2 max-[400px]:flex-col max-[400px]:items-stretch"
    >
      <span>{label}</span>
      <input
        className="rounded-lg   border bg-primary-light px-2 py-1 outline-none  dark:border-gray-600 dark:bg-primary-dark dark:text-secondary-dark focus:dark:border-gray-50"
        onChange={onChangeInput}
        placeholder={placeholder}
        type={type}
        value={value}
        inputMode={inputmode}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
}

export default TextInput;
{
}
