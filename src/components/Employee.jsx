import React, { useState } from "react";

export default function Employee({ employee, employees, onAdd, onRemove }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    onAdd(name, role, employee.name);
    setName("");
    setRole("");
    setShowForm(false);
  };

  // Check if this employee is a manager
  const isManager = employees.some((emp) => emp.manager === employee.name);

  return (
    <div className="employee text-white border-b py-4">
      <div className="flex flex-row items-center">
        <div className="flex">
          <p className="pr-2 text-sm">
            Name: <span className="font-bold text-lg">{employee.name}</span>
          </p>
          <p className="pr-2 text-sm">
            Role: <span className="font-bold text-lg">{employee.role}</span>
          </p>
        </div>

        {/* Show add button only if the employee is a manager */}
        <div className="ml-auto">
          {isManager && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 px-2 py-1 rounded-md mr-2 text-white text-sm"
            >
              {showForm ? "Cancel" : "Add Employee"}
            </button>
          )}
          <button
            onClick={() => onRemove(employee.name)}
            className="bg-red-500 px-2 py-1 rounded-md text-white text-sm"
          >
            Remove Employee
          </button>
        </div>
      </div>

      {showForm && (
        <div className="flex">
          <form onSubmit={handleAdd} className="mt-4 ml-auto">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="outline-0 border px-1 rounded-md mx-2 text-gray-900"
            />
            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="outline-0 border px-1 rounded-md mr-2 text-gray-900"
            />
            <button
              type="submit"
              className="bg-green-500 px-2 py-1 rounded-md text-white text-sm"
            >
              Confirm
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
