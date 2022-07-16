import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  return (
    <div className="lb-root">
      <div className="lb-block">
        <div className="head-item">
          <div className="close-item">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => props.setIsOpen(false)}
            />
          </div>
        </div>
        <div className="img-item">
          <img src={props.url} alt={props.id} />
        </div>
      </div>
    </div>
  );
}
