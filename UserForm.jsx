import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import {  useNavigate, useParams } from "react-router-dom";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { users, dispatch } = useContext(UserContext);
  const {id}=useParams();
  const navigate=useNavigate();
  // console.log(id);

  const userRole = useRef();

  const updateUser= id ? users.find((user)=>user.id ===Number(id) ): null;
  console.log(updateUser)

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id: updateUser ? updateUser.id :Date.now(),
      name,
      email,
      role: userRole.current.value,
    };
   // console.log(user);

    // console.log(user.id, " user id");

    console.log(users);
    if (updateUser) {
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
      navigate('/')
    

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
