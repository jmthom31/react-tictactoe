import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const AppHeader = () => (
    <Navbar fluid>
        <Navbar.Brand>
          {/* Added message to let user know it's best of 5 */}
            <Link to="/">Tic-Tac-Toe (Standalone) - best of 5!</Link>
        </Navbar.Brand>
    </Navbar>
);

export default AppHeader;
