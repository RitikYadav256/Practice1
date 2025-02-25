import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) {
      alert("Both fields are required!");
      return;
    }

    console.log("Submitted:", { name, comment });

    // Clear form fields
    setName("");
    setComment("");

    // Redirect to Home after 1 second
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
