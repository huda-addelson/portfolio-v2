import { IInputForm } from '.';

const TextArea = ({ label, name, ...rest }: IInputForm) => {
  return (
    <label
      className='relative block rounded-lg border-2 border-base-content/25 bg-base-100 p-3'
      htmlFor={name}
    >
      <span className='text-xs font-medium text-base-content/60'>{label}</span>

      <textarea
        className='w-full resize-none border-none bg-base-100 p-0 text-sm text-base-content placeholder-base-content/75 outline-none focus:ring-0'
        id={name}
        required
        name={name}
        {...rest}
      ></textarea>
    </label>
  );
};

export default TextArea;
