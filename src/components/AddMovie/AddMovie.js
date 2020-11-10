import React, { useState } from "react";

import Modal from "react-modal";

import "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    date: "",
    rating: "",
    description: "",
    image: "",
  });

  const handlChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handlSubmit = () => {
    AddNewMovie(newMovie);
    setNewMovie({ name: "", date: "", rating: "", description: "", image: "" });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" onChange={handlChange} required />
          <label>Movie Rate</label>
          <input type="text" name="rating" onChange={handlChange} required />
          <label>Movie Release Date</label>
          <input type="text" name="date" onChange={handlChange} required />
          <label>Movie Image</label>
          <input type="url" name="image" onChange={handlChange} required />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            onChange={handlChange}
            required
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            handlSubmit();
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
