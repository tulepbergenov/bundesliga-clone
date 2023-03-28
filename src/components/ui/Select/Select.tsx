import { ArrowBottomIcon } from "@/src/assets/imgs/icons";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { ISelect } from "./Select.interface";

export const Select = ({ items, value, onChange, className }: ISelect) => {
  return (
    <Listbox
      value={value}
      onChange={onChange}
      as="div"
      className={classNames("relative", className)}
    >
      {({ open }) => (
        <>
          <Listbox.Button
            as="button"
            type="button"
            className={classNames(
              "relative grid w-52 grid-cols-[1fr_1.2rem] items-center border-b border-b-gray-400 px-4 py-3 text-start text-base capitalize before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-50 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25",
              {
                ["before:opacity-25"]: open,
              }
            )}
          >
            <span>{value}</span>
            <ArrowBottomIcon
              className={classNames(
                "h-auto w-full transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open,
                }
              )}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options
              as="ul"
              className="absolute bottom-[calc(100%+0.5rem)] left-0 z-10 w-full bg-white text-gray-900 shadow-md"
            >
              {items.map((item) => (
                <Listbox.Option key={item} value={item} as="li">
                  {({ active, selected }) => (
                    <button
                      type="button"
                      className={classNames(
                        "relative inline-block w-full px-4 py-3 text-start capitalize transition-colors duration-300 ease-in-out",
                        {
                          ["text-red-500"]: selected,
                          ["bg-gray-200"]: active,
                        }
                      )}
                    >
                      {item}
                    </button>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
