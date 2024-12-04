import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button";
import hero from "./hero.module.scss";

const HeroBanner = (props) => {
  return (
    <div className={`${hero.heroBanner} ${props.bgColor} whiteText`}>
      <Container className="py-3">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            {props.btn && (
              <Button className={`${hero.fullWidth} blueBg whiteText`}>
                Get Started
              </Button>
            )}
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <img src={props.img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
