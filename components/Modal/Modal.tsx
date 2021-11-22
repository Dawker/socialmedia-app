import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

import { modalState } from '../../atoms/modalAtom';

const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen px-4 pt-4 
          pb-20 text-center sm:p-0 sm:block">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div className="inline-block align-bottom bg-white rounded-lg px-4 
            pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
            sm:align-middle sm:max-w-sm sm:w-full sm:p-6 z-20">
              <div>
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray 900"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div>
                    <input type="file" hidden />
                  </div>
                  <div className="mt-2">
                    <input type="text" className="border-none focus:ring-0 w-full text-center"
                      placeholder="Enter a caption..." />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button type="button" className="inline-flex justify-center w-full rounded-md border
                  border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white
                  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-300
                  disabled:cursor-not-allowed 
                  ">
                    Upload Post
                  </button>

                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal
