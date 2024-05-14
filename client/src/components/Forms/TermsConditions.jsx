import { termsAndConditions } from '../../constants/index';
import { useModal } from '../../utils/ModalContext';

const TermsConditions = () => {
  const { toggleModal } = useModal();

  return (
    <div className="text-xs">
      <p className="mb-4">
        By creating an account and using our services, you agree to the
        following terms and conditions:
      </p>

      <ol className="list-decimal">
        {termsAndConditions.map((item, index) => (
          <li className="pl-2 ml-3 mb-3" key={index}>
            <strong className="mr-1">{item.title}</strong>
            {item.content}
          </li>
        ))}
      </ol>
      <div className="flex justify-end">
        <button
          onClick={() => (
            toggleModal('termsOfUse'), toggleModal('registerModal')
          )}
          className="flex text-center border-2 text-sm font-medium py-2 px-8 rounded-xl bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 justify-center"
        >
          I agree
        </button>
      </div>
    </div>
  );
};

export default TermsConditions;
