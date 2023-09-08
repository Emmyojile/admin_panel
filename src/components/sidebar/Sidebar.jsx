import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">emmyAdmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li><span>Dash</span></li>
                <li><span>Dash</span></li>
                <li><span>Dash</span></li>
                <li><span>Dash</span></li>
            </ul>
        </div>
        <div className="bottom">Bottom</div>
    </div>
  )
}

export default Sidebar