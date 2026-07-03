import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ContactForm from "@/components/ContactForm";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./about.module.scss";

export default function About() {
  return (
    <main>
      <HeroBanner
        bgColor="darkBlueBg"
        btn={true}
        img="/projectImages/vibey-web-dev-image.jpg"
        heading="About Bell WebDev"
        subheading="Local Lehigh Valley web development, backed by 5 years of professional engineering experience."
      />
      <Container className={`${styles.about} my-5 py-5`}>
        <Row className="justify-content-center text-center">
          <Col lg={9}>
            <p>
              Bell WebDev is a freelance web development practice built on
              one idea: local businesses deserve the same quality of
              engineering that big companies pay six figures for internally.
            </p>
            <p>
              I bring 5 years of professional Web Engineering experience —
              currently at a mid-size company (~4,500 employees) — to every
              project I take on. That day-to-day experience building and
              maintaining production software used by real customers is what
              shapes how I approach freelance work: code that&apos;s fast,
              reliable, and built to last, not just something that looks good
              in a demo.
            </p>
            <p className="mb-0">
              I take on a limited number of local projects alongside my
              full-time engineering work, so I&apos;m selective about what I
              commit to — but that also means every client gets focused
              attention and realistic timelines, not a rushed job squeezed
              between a dozen others.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="blueBg py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="whiteText">
              <h2>A Bit About How I Work</h2>
              <ul className={styles.workList}>
                <li>
                  Direct communication — you&apos;re talking to the person
                  actually writing your code, not a project manager relaying
                  messages.
                </li>
                <li>
                  No bloated subscriptions or page-builder lock-in — you own
                  your site outright.
                </li>
                <li>
                  Practical recommendations — I&apos;ll tell you honestly if
                  you need a $300 static site or something more complex.
                  I&apos;m not here to upsell you.
                </li>
                <li>
                  Realistic turnaround — since this is alongside a full-time
                  role, timelines are typically 2–4 weeks rather than
                  same-day availability. I&apos;ll set clear expectations
                  upfront.
                </li>
              </ul>
              <h2 className="mt-5">Where I&apos;m Located</h2>
              <p>
                I&apos;m based in the Lehigh Valley in Pennsylvania, but if
                you&apos;re not local, I work with clients from all over.
              </p>
              <p className="mb-0">
                If you are in the area and are interested in working
                together, feel free to fill out the contact form and request
                an in-person meeting.
              </p>
            </Col>
            <Col lg={6}>
              <img
                className="img-fluid img-rounded"
                src="./projectImages/women-looking-at-laptop.jpeg"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5 py-5">
        <ContactForm
          formHeading="Let's build something that works for your business."
          formSubhead="Tell me a bit about your project and I'll get back to you within one business day with a straightforward quote."
        />
      </Container>
    </main>
  );
}
