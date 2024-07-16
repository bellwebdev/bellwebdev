import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="darkBlueBg whiteText">
      <Container className="py-4">
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <Image
              src="/projectImages/BellWebDevPicWhite.png"
              width={40}
              height={40}
              alt="Bell WebDev Logo"
            />
            <Link className="ps-3 pe-2" href="/">
              About
            </Link>
            <Link className="px-2" href="/">
              Contact
            </Link>
            <Link className="px-2" href="/">
              Blog
            </Link>
          </Col>
          <hr className="mt-2 turqoiseText"></hr>
        </Row>
        <Row className="justify-content-between align-items-center text-center">
          <Col className="text-sm-start">
            <p className="mb-0">&copy; 2024 Bell WebDev</p>
          </Col>
          <Col className="text-sm-end">
            <FontAwesomeIcon icon={faLinkedinIn} width={20} className="mx-2" />
            <FontAwesomeIcon icon={faFacebook} width={20} className="mx-2" />
            <FontAwesomeIcon icon={faInstagram} width={20} className="mx-2" />
            <FontAwesomeIcon icon={faXTwitter} width={20} className="mx-2" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
