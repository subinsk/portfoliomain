import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .hire-me-section {
    margin-top: 40px;
    padding: 20px;
    background: linear-gradient(
      135deg,
      rgba(100, 255, 218, 0.05) 0%,
      rgba(100, 255, 218, 0.02) 100%
    );
    border: 1px solid rgba(100, 255, 218, 0.2);
    border-radius: var(--border-radius);
    max-width: 540px;
  }

  .hire-me-text {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin: 0 0 15px 0;
    line-height: 1.4;
  }

  .hire-me-link {
    ${({ theme }) => theme.mixins.smallButton};
    display: inline-block;
    text-decoration: none;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Subin S K.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <>
      <p>
        I'm a Software Engineer passionate about designing and developing full-stack web
        applications that are fast, intuitive, and visually engaging—focused on delivering seamless
        digital experiences that solve real-world problems.
      </p>
    </>
  );
  const five = (
    <div className="hire-me-section">
      <p className="hire-me-text">
        Cut through the clutter! Want to see how your job requirements align with my expertise?
      </p>
      <a className="hire-me-link" href="/#hire-me">
        Find Your Perfect Match
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
