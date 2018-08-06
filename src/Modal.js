import React from 'react';
import ReactDOM from 'react-dom';


	 // Modal Component

	 const Modal = ({ handleClose, show, children }) => {
  const container = show ? "modal display-block" : "modal display-none";

		  return (
		    <div className={container} >
		      <section className="modal-main">
		        {children}
		      </section>
		    </div>
		  );
		};


export default Modal;