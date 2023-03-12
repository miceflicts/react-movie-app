import React, {useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

interface Props {
  onFilter ?: (activeFilter?: string) => void;
}

function FilterTodo({onFilter = () => {}}: Props) {
  const [filter, setFilter] = useState("All");

  const handleSelect = (event: any) => {
    const activeFilter = event;
    setFilter(activeFilter);
    onFilter(activeFilter);
  };

  return (
    <>
      <div className="h-100">
        <Dropdown onSelect={handleSelect} as={ButtonGroup} className="h-100">
          <Dropdown.Toggle variant='danger' className='dropdownButton'>Filter</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
            <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default FilterTodo