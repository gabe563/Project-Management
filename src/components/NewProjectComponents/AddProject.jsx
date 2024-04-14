import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ onAdd, onCancel }) {
  const dialog = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleInput() {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    });
  }
  return (
    <>
      <Modal ref={dialog}>
        <h2 className='text-stone-500 text-2xl font-bold p-5'>Invalid Input</h2>
        <p className='m-2 p-2 px-6 text-stone-400'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <section className='w-[50rem] mx-auto '>
        <div className='mt-20 flex items-center justify-end'>
          <button className='m-2' onClick={onCancel}>
            Cancel
          </button>
          <button
            className='m-2 p-2 px-6 text-stone-200 bg-black rounded-md'
            onClick={handleInput}
          >
            Save
          </button>
        </div>
        <div>
          <Input label='title' textarea={false} ref={title} />
          <Input label='description' textarea={true} ref={description} />
          <Input
            label='due date'
            textarea={false}
            type='date'
            min={new Date()}
            ref={dueDate}
          />
        </div>
      </section>
    </>
  );
}
