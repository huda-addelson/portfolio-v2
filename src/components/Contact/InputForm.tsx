import { IInputForm } from '.';

const InputForm = ({ label, name, type = 'text', ...rest }: IInputForm) => {
  return (
    <label
      className='relative block rounded-lg border-2 border-base-content/25 bg-base-100 p-3'
      htmlFor={name}
    >
      <input
        className='peer w-full border-none bg-base-100 px-0 pb-0 pt-3.5 text-sm text-base-content/90 placeholder-transparent outline-none focus:ring-0'
        id={name}
        type={type}
        name={name}
        required
        {...rest}
      />

      <span className='absolute left-3 text-xs font-medium text-base-content/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs'>
        {label}
      </span>
    </label>
  );
};
export default InputForm;
