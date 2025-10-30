import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { users, dispatch } = useContext(UserContext);

  const userRole = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id: Date.now(),
      name,
      email,
      role: userRole.current.value,
    };
   // console.log(user);

    // console.log(user.id, " user id");

    console.log(users);
    if (users.id) {
      dispatch({
        type: "updateUser",
        payload: user,
      });
    } else {
      dispatch({
        type: "addUser",
        payload: user,
      });
      setName("");
      setEmail("");
      userRole.current.value = "";
    }

    // console.log(user);
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "10px solid #C5CBC6",
        backgroundColor: "#D6E9D9",
        width: "140vh",
        height: "90vh",
      }}
    >
      <div style={{
            textAlign: "center",
            border:'2px solid black',
            width:'55vh',
            height:'55vh'
            }}>
      <form onSubmit={handleSubmit}>
              <h1>Add User</h1>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          placeholder="enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="enter the email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Role :</label>
        <select ref={userRole}>
          <option value="select Role">Select Role</option>
          <option value="frontend">Fronted</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </select>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
      </div>
    </div>
  );
};
