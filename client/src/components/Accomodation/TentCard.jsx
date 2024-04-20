import '@fortawesome/fontawesome-free/css/all.css';
import { useModal } from '../../utils/ModalContext';

const TentCard = ({
  item: { name, image, details = [], description, amenities = [] },
}) => {
  const { toggleModal } = useModal();

  return (
    <div
      id="#accomodation"
      className=" bg-white border border-gray-200 rounded-xl shadow mb-10 odd:my-4 flex flex-col"
    >
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-col">
        <img className="rounded-t-xl h-full md:h-72" src={image} alt={name} />

        <div className="p-6 ">
          <div className="lg:mt-5 lg:mb-2">
            <h2 className="h2">{name}</h2>
            <div className="py-4 flex flex-wrap gap-3">
              {details.map((item) => (
                <div key={item.id} className="text-sm ">
                  <span className="text-gray-500 mr-1">{item.info}</span>
                  <i className={`${item.icon} text-orange-500`} />
                  <span className="text-gray-500 ml-1"> / </span>
                  {item.bedType ? (
                    <span className="text-gray-500">{item.bedType}</span>
                  ) : null}
                </div>
              ))}
            </div>
            <p className="lg:mt-5 text-gray-700">{description}</p>
            <div className="flex flex-row-reverse">
              <button
                onClick={() => toggleModal('reserveModal')}
                className="mt-5 border-2 border-indigo-800 text-indigo-800 font-poppins font-medium py-3 px-5 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-indigo-800 hover:to-indigo-900 hover:text-white "
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex border-b border-[1.5px]" />
      <div className="hidden md:flex px-6 py-3">
        <div className="py-4 flex flex-wrap gap-3 text-xs">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="border-[1.5px] border-orange-500 py-2 px-5 rounded-full"
            >
              <i className={`${item.icon} text-orange-500`} />
              <span className="text-gray-500 ml-2">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TentCard;
