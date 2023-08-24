import React, { useState } from "react";
import "../../css/dropdown-list.css";

interface DropdownProps {
  title: string;
  items: string[];
  onSelect: (opt: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | number | null>(
    null
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedItem ? selectedItem : title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={() => selectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
