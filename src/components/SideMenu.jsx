import { observer } from "mobx-react-lite";

import sideMenuStore from "../stores/sideMenuStore";

import logo from "../assets/logo.png";

const SideMenu = observer(() => {
  return (
    <div
      className={`flex h-screen flex-col justify-between border-e bg-white z-20 fixed inset-0 transition-transform  ${
        sideMenuStore.sideMenuState ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-4 py-6">
        <div className="flex justify-between items-ctner">
          <span className="grid h-10 w-32 place-content-center  ">
            <img className="rotate-90 w-16" src={logo} alt="Logo image" />
          </span>

          <button
            onClick={() => {
              sideMenuStore.sideMenuOpened = false;
            }}
            className="btn btn-outline fa-solid fa-x"
          ></button>
        </div>

        <ul className="mt-6 space-y-6">
          {/* About us section */}
          <li>
            <button className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium">
              <p className="w-full text-left">About us</p>
            </button>
          </li>

          {/* Form  */}
          <li>
            <button className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium">
              <p className="w-full text-left">Form</p>
            </button>
          </li>

          {/* Contacts */}
          <li>
            <button className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium">
              <p className="w-full text-left">Contacts</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default SideMenu;
