import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import banner1 from "../assets/All Images/Vector-1.png";
import banner2 from "../assets/All Images/Vector.png";

export default function Blog() {
  return (
    <div className="my-container mb-32">
      <div className="flex h-36 justify-between items-center bg-light-purple -mt-20">
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner2} alt="" />
        <p className="text-2xl font-bold text-center">Frequently Asked Question</p>
        <img className="w-1/3 md:w-1/4 lg:w-1/6" src={banner1} alt="" />
      </div>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>When should we ues Context API?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  The Context API in React is used for managing global state,
                  avoiding prop drilling, cross-component communication, code
                  organization, and integrating with third-party libraries. It's
                  helpful when you need to share data or functionality across
                  components or establish communication between unrelated
                  components. Use it judiciously to avoid unnecessary complexity
                  in your code.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is Custom hook?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  A custom hook in React is a reusable function that
                  encapsulates stateful logic in functional components. It
                  allows you to abstract and share common logic across
                  components without using class components or higher-order
                  components. Custom hooks promote code reuse, separation of
                  concerns, and maintainability in React applications.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is <span className="font-semibold">useRef()</span>?
                    When should we use it?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <span className="font-semibold">`useRef()`</span> is a React
                  hook used to create a mutable reference to a value or DOM
                  element. It's used for accessing/modifying the DOM, storing
                  mutable values, accessing previous values, and establishing
                  communication between child and parent components. It does not
                  trigger re-renders and is useful in scenarios where you need
                  to work with mutable data in a functional component.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    What is <span className="font-semibold">`useMemo()`</span>{" "}
                    in React?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <span className="font-semibold">`useMemo()`</span> is a React
                  hook used for memoizing the result of a computation in a
                  functional component. It stores the result and only recomputes
                  when the dependencies change, optimizing performance by
                  avoiding unnecessary computations. It takes a function as the
                  first argument representing the computation and an array of
                  dependencies as the second argument.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
