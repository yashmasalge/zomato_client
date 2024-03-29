import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/reducers/auth/auth.action";

function Signin({ isOpen, setIsOpen }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const disptach = useDispatch();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = () => {
    disptach(signIn(userData));
    setUserData({ email: "", password: "" });
    closeModal();
  };

  const googleSignIn = () =>
    (window.location.href =
      "https://zomato-backend-eium.onrender.com/auth/google");

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.53)" }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>
                <div className="mt-2 flex flex-col gap-3 w-full">
                  <button
                    className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                    onClick={googleSignIn}
                  >
                    Sign In With Google <FcGoogle />
                  </button>

                  <form className="flex flex-col gap-2">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="user@email.com"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2 mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="**********"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                      />
                    </div>
                    <div
                      className="w-full text-center bg-zomato-400 text-white py-2 rounded-lg"
                      onClick={submit}
                    >
                      Sign In
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Signin;
