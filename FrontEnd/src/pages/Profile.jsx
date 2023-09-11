import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { Link } from "react-router-dom";



const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="bg-black">
      <Link to="/">
        <button onClick={handleLogout} type="button" className="text-white">
          Logout
        </button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
