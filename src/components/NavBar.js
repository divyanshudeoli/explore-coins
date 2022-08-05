import { ConnectButton } from "web3uikit";
import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className="topnav">
            <Link to="/projects">
                <div className="link">
                    Projects
                </div>
            </Link>
            <Link to="/addproject">
                <div className="link">
                    Add Project
                </div>
            </Link>
            <Link to="/posts">
                <div className="link">
                    Posts
                </div>
            </Link>
            <Link to="/feed">
                <div className="link">
                    Feed
                </div>
            </Link>
            <Link to="/settings">
                <div className="link">
                    Setting
                </div>
            </Link>
            
            <div className="link">
                <ConnectButton />
            </div>
        </div>
    )
}