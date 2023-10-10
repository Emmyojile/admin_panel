import {ChatBubbleOutlineOutlined, ListOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationAddOutlined, SearchOutlined, DarkMode } from "@mui/icons-material";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlined/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            English
          </div>
          <div className="item">
            <DarkMode className="icon" onClick={()=> dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationAddOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar