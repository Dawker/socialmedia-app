import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/solid';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import { Fragment, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { modal } from '../../atoms/modalAtom';
import { db, storage } from '../../firebase/clientApp';
import { IModalProps } from '../../typescript/components/modal.type';

const Modal: React.FC<IModalProps> = ({ username, profilePic }) => {
  const [isOpen, setIsOpen] = useRecoilState(modal);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const filerPickerRef = useRef<HTMLInputElement | null>(null);
  const captionRef = useRef<HTMLInputElement | null>(null);

  function getImage(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      const image = readerEvent.target.result
      setSelectedFile(image)
    }
  }

  async function uploadPost() {
    if (loading || !selectedFile) return;
    setLoading(true)
    // createa a new post to firestos posts collections
    const docRef = await addDoc(collection(db, 'posts'), {
      caption: captionRef.current?.value,
      timestamp: serverTimestamp(),
      username,
      profilePic
    })

    // getting a reference to the image for the storage
    const imageRef = ref(storage, `posts${docRef.id}/image`);

    // uploading the image to the storage
    await uploadString(imageRef, selectedFile, "data_url").then(async snapcshot => {
      // getting the download url when uploaded
      const downloadURL = await getDownloadURL(imageRef);

      // updating the post with the image url
      await updateDoc(doc(db, 'posts', docRef.id), { image: downloadURL })
    })

    setIsOpen(false);
    setLoading(false);
    setSelectedFile(null);
    filerPickerRef.current = null
  }

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
                {selectedFile ? (
                  <img
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile}
                    className="w-full object-contain cursor-pointer"
                    alt="selected file"
                  />
                ) : (
                  <div onClick={() => filerPickerRef?.current?.click()} className="mx-auto flex items-center 
                  bg-red-100 cursor-pointer
                  justify-center h-12 w-12 rounded-full">
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}

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
                    <input
                      ref={filerPickerRef}
                      type="file"
                      onChange={getImage}
                      hidden
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      ref={captionRef}
                      className="border-none focus:ring-0 w-full text-center"
                      placeholder="Enter a caption..." />
                  </div>
                </div>
                <div

                  className="mt-5 sm:mt-6">
                  <button
                    disabled={!selectedFile}
                    onClick={uploadPost} type="button"
                    className="inline-flex justify-center w-full rounded-md border
                    border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white
                  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-300
                    disabled:cursor-not-allowed">
                    {loading ? "Uploading..." : "Upload Post"}
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
