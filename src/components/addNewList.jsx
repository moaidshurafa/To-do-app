import { useState } from "react";

const AddNewList = ({ onAddList }) => {
  const [showInput, setShowInput] = useState(false);
  const [listName, setListName] = useState("");

  const handleSave = () => {
    if (listName.trim() === "") return;
    const newList = { name: listName.trim(), id: Date.now() };
    onAddList(newList);
    setListName("");
    setShowInput(false);
  };

  const handleCancel = () => {
    setListName("");
    setShowInput(false);
  };

  return (
    <div className="mb-4">
      {showInput ? (
        <div className="flex items-center gap-2">
          <input
            className="border rounded p-2"
            type="text"
            placeholder="List Name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            autoFocus
          />
          <button
            className="text-white bg-blue-500 px-3 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="text-white bg-gray-500 px-3 py-2 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded"
          onClick={() => setShowInput(true)}
        >
          + Add New List
        </button>
      )}
    </div>
  );
};

export default AddNewList;
