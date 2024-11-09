import { useState, useMemo } from "react";
import "./index.css";
import { EmployeeData as initialEmployees } from "./data/EmployeeData";
import EmployeeList from "./components/EmployeeList";

export default function App() {
  //state with the initial employee data
  const [employeeMap, setEmployeeMap] = useState(() => {
    const map = new Map();
    initialEmployees.forEach(emp => map.set(emp.name, emp));
    return map;
  });

  const employeeList = useMemo(() => Array.from(employeeMap.values()), [employeeMap]);

  //add a new employee to the list
  const addEmployee = (name, role, manager) => {
    setEmployeeMap(new Map(employeeMap).set(name, { name, role, manager }));
  };

  //remove an employee from the list
  const removeEmployee = (name) => {
    const newMap = new Map(employeeMap);
    newMap.delete(name);
    setEmployeeMap(newMap);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="mx-auto container pt-10">
        <EmployeeList
          employees={employeeList}
          manager={null}
          onAdd={addEmployee}
          onRemove={removeEmployee}
        />
      </div>
    </div>
  );
}