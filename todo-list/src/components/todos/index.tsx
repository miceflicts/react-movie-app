import {useState} from 'react'

import check from "../../assets/svg/bx-check.svg"
import trash from "../../assets/svg/bx-trash.svg"
import "./style.css"

type propsTypes = {
  text: string
  filter: string;
}

function Todos({text, filter}: propsTypes) {
  const [isDone, setIsDone] = useState("Active");
  const [isVisible, setIsVisible] = useState(true);

  const handleTrashClick = () => {
    setIsVisible(false);
  };

  const handleCheckClick = () => {
    setIsDone(isDone === "Active" ? "Done" : "Active");
  };

    if (isVisible && (filter === isDone || filter === "All")) {
      return (
        <div className='todosBox d-flex justify-content-between align-items-center rounded'>
          <h3 className={`todoText margin mt-1 ${isDone}`}>{text}</h3>
          <div className="buttons d-flex gap-2 margin">
            <a href="#" onClick={handleCheckClick}><img src={check} alt="" width={24}/></a>
            <a href="#" onClick={handleTrashClick}><img src={trash} alt="" width={24}/></a>
          </div>
        </div>
      )
    };
  return null;
};

export default Todos