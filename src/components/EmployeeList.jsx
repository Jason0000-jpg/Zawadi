import React from "react";
import Employee from "./Employee";

export default function EmployeeList({ employees, manager, onAdd, onRemove }) {
  return (
    <div>
      {/* Filter employees to only include those managed by the current manager */}
      {employees
        .filter((emp) => emp.manager === manager)
        .map((employee) => (
          <div key={employee.name} className="ml-4">
            {/* Render the Employee component for each employee */}
            <Employee
              employee={employee}
              employees={employees}
              onAdd={onAdd}
              onRemove={onRemove}
            />
            {/* Recursively render EmployeeList for the current employee's Team members */}
            <EmployeeList
              employees={employees}
              manager={employee.name}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </div>
        ))}
    </div>
  );
}