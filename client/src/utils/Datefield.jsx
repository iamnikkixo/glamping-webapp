import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField, ErrorMessage } from 'formik';

const Datefield = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const isError = meta.touched && meta.error;

  // Update Formik state
  const handleDateChange = (date) => {
    setValue(date);
  };

  const inputClass = isError
    ? 'textfield border-red-500 text-red-600 focus:border-red-500 focus:ring-red-500'
    : 'textfield';

  return (
    <div className="col-span-1">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <DatePicker
        {...field}
        selected={field.value || null}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        wrapperClassName="w-full"
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

export default Datefield;
