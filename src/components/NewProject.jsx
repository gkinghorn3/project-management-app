import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value.toString();

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      id: Math.random().toString(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='close'>
            <h2 className="text-xl font-bol text-stone-500 my-4">Invalid input</h2>  
            <p className="text-sm">Please make sure you provide a valid value for every field</p>
         </ Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={() => onCancel()}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" textarea={false} />
          <Input ref={description} label="Description" textarea={true} />
          <Input ref={dueDate} label="Due date" textarea={false} type="date" />
        </div>
      </div>
    </>
  );
}
