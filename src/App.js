import "./App.css";
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "online-mode"
  });

  // console.log(formData.firstName, formData.lastName, formData.email, formData.comments)
  console.log(formData);

  function changeHandler(event) {
    const { name, checked, value, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your first name"
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your last name"
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <br />

      <input
        type="email"
        placeholder="Enter your email"
        onChange={changeHandler}
        name="email"
        value={formData.email}
      />
      <br />
      <br />

      <textarea
        type="text"
        placeholder="Enter your comments"
        onChange={changeHandler}
        name="comments"
        value={formData.comments}
      />
      <br />
      <br />

      <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
      />
      <label htmlFor="isVisible">Am I Visible</label>
      <br />
      <br />

      <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="online-mode"
        id="online-mode"
        checked={formData.mode === "online-mode"}
      />
      <label htmlFor="online-mode">Online mode</label>
      <br />
      <br />

      <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="offline-mode"
        id="offline-mode"
        checked={formData.mode === "offline-mode"}
      />
      <label htmlFor="offline-mode">Offline mode</label>
    </div>
  );
}

export default App;
