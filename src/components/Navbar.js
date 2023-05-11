// import { connect } from "react-redux";
// import useAccountInfo from "../hooks/useAccountInfo";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import { Button } from "react-bootstrap";
// import NavDropdownValue from "./NavDropdownValue";
// import PageToggle from "./PageToggle";
// import {
//   selectWalletAddress,
//   selectAccBalance,
//   setWalletAddress,
// } from "../redux/appSlice";

// const MyNavbar = ({ walletAddress, accBalance }) => {
//   const { connectWalletHandler } = useAccountInfo();

//   return (
//     <Navbar bg="dark" expand="lg" variant="dark">
//       <Container fluid>
//         <Navbar.Brand>My wallet app</Navbar.Brand>
//         <PageToggle />
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" navbarScroll>
//             {walletAddress !== "Connect!" && <NavDropdownValue />}
//           </Nav>
//           <Nav.Link style={{ marginRight: "20px" }}>
//             Balance: {accBalance ? accBalance.slice(0, 7) : "0.0"}
//           </Nav.Link>
//           <Button
//             className="ml-5"
//             variant="outline-success"
//             onClick={connectWalletHandler}
//           >
//             {walletAddress}
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     walletAddress: setWalletAddress(state),
//      accBalance: setAccBalance(state),
//   };
// };

// export default connect(mapStateToProps)(MyNavbar);

import useAccountInfo from "../hooks/useAccountInfo";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import NavDropdownValue from "./NavDropdownValue";
import PageToggle from "./PageToggle";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const { walletAddress, accBalance } = useSelector((state) => state);
  const { connectWalletHandler } = useAccountInfo();

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>My wallet app</Navbar.Brand>
        <PageToggle />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {walletAddress !== "Connect!" && <NavDropdownValue />}
          </Nav>
          <Nav.Link style={{ marginRight: "20px" }}>
            Balance: {accBalance ? accBalance.slice(0, 7) : "0.0"}
          </Nav.Link>
          <Button
            className="ml-5"
            variant="outline-success"
            onClick={connectWalletHandler}
          >
            {walletAddress}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
