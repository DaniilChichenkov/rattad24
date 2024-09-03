/* eslint-disable react/prop-types */
const ServicesList = ({ listItems, header }) => {
  return (
    <div className="py-4">
      {header && <p className="font-bold text-lg">{header}</p>}
      <ul className="w-full h-auto flex flex-col items-start justify-start gap-2 mt-2">
        {listItems.map((item, i) => (
          <li
            className="font-normal text-normal flex justify-start items-center gap-2"
            key={i}
          >
            <i className="fa-solid fa-circle scale-75"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
