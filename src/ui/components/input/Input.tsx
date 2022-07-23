export const Input = ({ register, type, name, label, required, ...rest }: InputType) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <label>
    {label}
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <input {...register(name, { required })} {...rest} type={type} />
  </label>
);

type InputType = {
  name: string;
  register: any;
  label: string;
  required: string | boolean;
  type: 'text' | 'password' | 'checkbox';
};
