import React from 'react';
import { useModal } from '../utils/ModalContext';
import ReserveForm from './ReserveForm';

const ReserveModal = () => {
  const { isModalOpen, toggleModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div
      className={`${
        isModalOpen ? 'flex' : 'hidden'
      } items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-900 bg-opacity-50 font-poppins`}
    >
      <div className="relative p-4 w-full max-w-2xl h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
            <h2 className="h2">Reserve Your Tent</h2>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={toggleModal}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ReserveForm />
        </div>
      </div>
    </div>
  );
};

export default ReserveModal;
