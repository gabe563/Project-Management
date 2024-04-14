import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className='rounded-md'>
      {children}
      <form
        method='dialog'
        className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
      >
        <button className='bg-stone-700 text-stone-400 py-2 px-4 rounded-md mt-3 hover:text-stone-300 hover:bg-stone-600'>
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
