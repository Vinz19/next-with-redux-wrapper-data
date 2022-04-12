import { useSelector, useDispatch } from "react-redux";
import { addName } from "../redux/actions/inputAction";

const User = () => {
  const add = useSelector((state) => state.input);
  const dispatch = useDispatch();

  return (
    <div>
      <form action='/showusers' method='get'>
        <label htmlFor="name"> Name: </label>
        <input type="text" name="name" />
        <label htmlFor="lastName"> Last Name: </label>
        <input type="text" name="lastName" />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default User;

/*
<form action='/api/register' method='post'>
      <label htmlFor="name"> Name: </label>
      <input type="text" id="name" name="name" />
      <label htmlFor="lastName"> Last Name: </label>
      <input type="text" id="lastName" name="lastName" />
      <button onClick={() => dispatch(addName(add))}>
        Add User
      </button>
      </form>*/
