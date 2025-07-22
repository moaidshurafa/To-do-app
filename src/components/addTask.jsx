import { useState } from "react";

const AddTask = ({ listId, onSave, onClose }) => {
  const [title, setTilte] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    onSave({ title: title.trim(), description: description.trim(), listId });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          className="w-full border rounded p-2 mb-3"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTilte(e.target.value)}
        />
        <textarea
          className="w-full border rounded p-2 mb-3"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="text-white bg-gray-500 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
