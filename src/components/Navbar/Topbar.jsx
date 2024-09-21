import { useDispatch } from "react-redux";
import "./topbar.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
// import {logout} from "../redux/features/authSlice"




const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(""));
    localStorage.clear();
    navigate("/login")

  };
  return (
    <>
      <div className="topbar-main">
        <div className="logo">AAYSTrack</div>
        <div className="profile-info">
          <div className="profile-pic">
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1726432587~exp=1726433187~hmac=e65fedd0fa03adf3fab4c786f85b7c7c52a8532d66ca1c1b1246d9798da75067" />
          </div>
          <div onClick={handleLogout}  className="logout-btn">
            <LogoutIcon />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
