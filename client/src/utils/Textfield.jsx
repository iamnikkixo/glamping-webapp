import { useField, ErrorMessage } from 'formik';
import { useState } from 'react';

const Textfield = ({ label, className, icon, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputClass = isError
    ? 'textfield border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
    : 'textfield';

  return (
    <div className={className}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          {...field}
          type={icon ? (showPassword ? 'text' : 'password') : undefined}
          className={`${inputClass} pl-3 pr-10`}
        />
        {icon && (
          <i
            onClick={togglePassword}
            className={`fas ${
              showPassword ? 'fa-eye' : 'fa-eye-slash'
            } absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
          />
        )}
      </div>
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-xs text-red-500"
      />
    </div>
  );
};

export default Textfield;
