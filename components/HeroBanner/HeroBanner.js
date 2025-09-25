import { Container, Row, Col } from "react-bootstrap";
import ButtonLink from "../ButtonLink";
import hero from "./hero.module.scss";

const HeroBanner = (props) => {
  return (
    <div className={`${hero.heroBanner} ${props.bgColor} whiteText`}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} lg={6}>
            <h1>{props.heading}</h1>
            <p className="my-3">{props.subheading}</p>
            {props.btn && (
              <ButtonLink
                href={"#contactForm"}
                className={`${hero.fullWidth} blueBg whiteText mb-3 mb-md-0`}
              >
                Get Started
              </ButtonLink>
            )}
          </Col>
          <Col xs={12} lg={6} className="text-md-end">
            <img src={props.img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
