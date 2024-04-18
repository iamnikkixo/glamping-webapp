import { useField, ErrorMessage } from 'formik';

const Textfield = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  const inputClass = isError
    ? 'textfield border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
    : 'textfield';

  return (
    <div className={className}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        {...props}
        {...field}
        type="text"
        className={inputClass}

      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-xs text-red-500"
      />
    </div>
  );
};

export default Textfield;
