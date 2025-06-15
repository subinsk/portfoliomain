import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { skillsDatabase } from '@data/skills';
import { email } from '@config';

const StyledSkillsShowcase = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  padding: 200px 150px 100px;

  @media (max-width: 1080px) {
    padding: 200px 100px 100px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px 100px;
  }
  @media (max-width: 480px) {
    padding: 125px 25px 100px;
  }
`;

const StyledHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;

  .back-link {
    ${({ theme }) => theme.mixins.inlineLink};
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 20px;
    display: inline-block;

    &:before {
      content: '← ';
    }
  }

  .title {
    font-size: clamp(40px, 8vw, 60px);
    margin-bottom: 20px;
  }

  .selected-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }

  .skill-pill {
    padding: 8px 16px;
    background-color: var(--light-navy);
    border: 1px solid var(--green);
    border-radius: 25px;
    color: var(--green);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
  }

  .subtitle {
    color: var(--slate);
    font-size: var(--fz-lg);
    max-width: 600px;
    margin: 0 auto 30px;
  }

  .navigation-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    .nav-link {
      ${({ theme }) => theme.mixins.smallButton};
      text-decoration: none;
      font-size: var(--fz-sm);
      padding: 8px 16px;
    }
  }
`;

const StyledSection = styled.section`
  margin-bottom: 50px;

  .section-title {
    font-size: var(--fz-xl);
    color: var(--lightest-slate);
    margin-bottom: 25px;
    display: flex;
    align-items: center;

    &:before {
      content: '0${props => props.number}.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-lg);
      font-weight: 400;
    }

    .section-icon {
      margin-left: 10px;
      font-size: var(--fz-lg);
    }
  }
`;

const StyledJobCard = styled.div`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 25px;
  margin-bottom: 20px;
  border: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:hover {
    border-color: var(--green);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .job-title {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    margin: 0;
  }

  .job-company {
    color: var(--green);
    font-size: var(--fz-md);
    margin: 5px 0;
  }

  .job-range {
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .job-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
  }

  .skill-highlight {
    background-color: var(--green);
    color: var(--navy);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--fz-xs);
    font-weight: 600;
  }

  .skill-normal {
    background-color: var(--lightest-navy);
    color: var(--slate);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--fz-xs);
  }
  .job-description {
    color: var(--slate);

    ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }

    li {
      margin-bottom: 10px;
      position: relative;
      padding-left: 20px;

      &:before {
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--green);
        font-weight: bold;
      }
    }

    .highlighted-text {
      background: linear-gradient(
        120deg,
        rgba(100, 255, 218, 0.2) 0%,
        rgba(100, 255, 218, 0.2) 100%
      );
      padding: 2px 4px;
      border-radius: 3px;
      color: var(--green);
      font-weight: 500;
      display: inline-block;
    }
  }

  .highlighted-text {
    background: linear-gradient(120deg, rgba(100, 255, 218, 0.3) 0%, rgba(100, 255, 218, 0.3) 100%);
    padding: 2px 4px;
    border-radius: 3px;
    color: var(--lightest-slate);
    font-weight: 500;
  }
`;

const StyledProjectCard = styled.div`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 25px;
  margin-bottom: 20px;
  border: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:hover {
    border-color: var(--green);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    margin: 0;
  }

  .project-links {
    display: flex;
    gap: 15px;
  }

  .project-link {
    ${({ theme }) => theme.mixins.inlineLink};
    color: var(--green);
    font-size: var(--fz-sm);
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
  }

  .tech-highlight {
    background-color: var(--green);
    color: var(--navy);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--fz-xs);
    font-weight: 600;
  }

  .tech-normal {
    background-color: var(--lightest-navy);
    color: var(--slate);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--fz-xs);
  }
  .project-description {
    color: var(--slate);
    line-height: 1.6;

    .highlighted-text {
      background: linear-gradient(
        120deg,
        rgba(100, 255, 218, 0.2) 0%,
        rgba(100, 255, 218, 0.2) 100%
      );
      padding: 2px 4px;
      border-radius: 3px;
      color: var(--green);
      font-weight: 500;
      display: inline-block;
    }
  }
`;

const StyledEmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--slate);
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  border: 1px dashed var(--lightest-navy);

  .empty-icon {
    font-size: 60px;
    margin-bottom: 20px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .empty-title {
    font-size: var(--fz-lg);
    color: var(--lightest-slate);
    margin-bottom: 10px;
    font-weight: 600;
  }

  .empty-text {
    font-size: var(--fz-md);
    max-width: 400px;
    margin: 0 auto;
  }
`;

const StyledCTA = styled.section`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 50px 40px;
  margin-top: 80px;
  text-align: center;
  border: 1px solid var(--lightest-navy);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 30px;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    margin-top: 40px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--green), var(--blue));
  }

  .cta-title {
    font-size: clamp(24px, 5vw, 36px);
    color: var(--lightest-slate);
    margin-bottom: 20px;
    font-weight: 600;
  }

  .cta-subtitle {
    color: var(--slate);
    font-size: var(--fz-lg);
    margin-bottom: 30px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: var(--fz-md);
      margin-bottom: 25px;
    }

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
      margin-bottom: 20px;
    }
  }

  .cta-button {
    ${({ theme }) => theme.mixins.button};
    margin-top: 10px;
    font-size: var(--fz-md);
    padding: 14px 28px;

    @media (max-width: 768px) {
      font-size: var(--fz-sm);
      padding: 12px 24px;
    }

    @media (max-width: 480px) {
      width: 100%;
      max-width: 280px;
    }
  }
`;

const SkillsShowcase = ({ location }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [highlightedJobs, setHighlightedJobs] = useState([]);
  const [highlightedProjects, setHighlightedProjects] = useState([]);

  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              range
              url
            }
            html
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  useEffect(() => {
    // Parse skills from URL
    const urlParams = new URLSearchParams(location.search);
    const skillsParam = urlParams.get('skills');

    if (skillsParam) {
      const skillNames = skillsParam.split(',');
      const skills = skillNames
        .map(name => skillsDatabase.find(skill => skill.name === name))
        .filter(Boolean);
      setSelectedSkills(skills);
    }
  }, [location.search]);

  useEffect(() => {
    if (selectedSkills.length === 0) {return;}

    const skillNames = selectedSkills.map(skill => skill.name.toLowerCase());

    // Process jobs
    const jobsWithHighlights = data.jobs.edges
      .map(({ node }) => {
        const content = node.html.toLowerCase();
        let hasSkill = false;
        let highlightedContent = node.html;
        skillNames.forEach(skill => {
          if (content.includes(skill.toLowerCase())) {
            hasSkill = true;
            // Create case-insensitive regex to highlight skills
            // Use word boundaries for common problematic cases
            let pattern = skill;
            if (skill === 'java') {
              pattern = '\\bjava\\b'; // Use word boundary for Java to avoid matching JavaScript
            }
            const regex = new RegExp(`(${pattern})`, 'gi');
            highlightedContent = highlightedContent.replace(
              regex,
              '<span class="highlighted-text">$1</span>',
            );
          }
        });

        return hasSkill ? { ...node, highlightedContent } : null;
      })
      .filter(Boolean);

    // Process projects
    const projectsWithHighlights = data.projects.edges
      .map(({ node }) => {
        const content = node.html.toLowerCase();
        const tech = node.frontmatter.tech || [];
        let hasSkill = false;
        let highlightedContent = node.html; // Check in tech array and content
        skillNames.forEach(skill => {
          if (
            tech.some(t => t.toLowerCase().includes(skill.toLowerCase())) ||
            content.includes(skill.toLowerCase())
          ) {
            hasSkill = true;
            // Create case-insensitive regex to highlight skills
            // Use word boundaries for common problematic cases
            let pattern = skill;
            if (skill === 'java') {
              pattern = '\\bjava\\b'; // Use word boundary for Java to avoid matching JavaScript
            }
            const regex = new RegExp(`(${pattern})`, 'gi');
            highlightedContent = highlightedContent.replace(
              regex,
              '<span class="highlighted-text">$1</span>',
            );
          }
        });

        return hasSkill ? { ...node, highlightedContent } : null;
      })
      .filter(Boolean);

    setHighlightedJobs(jobsWithHighlights);
    setHighlightedProjects(projectsWithHighlights);
  }, [selectedSkills, data]);
  const highlightSkillInTech = (techArray, selectedSkills) => techArray.map(tech => {
    const isHighlighted = selectedSkills.some(skill => {
      // Special case for Java to avoid matching JavaScript
      if (skill.name.toLowerCase() === 'java') {
        return /\bjava\b/i.test(tech);
      }
      return tech.toLowerCase().includes(skill.name.toLowerCase());
    });
    return { name: tech, highlighted: isHighlighted };
  });

  if (selectedSkills.length === 0) {
    return (
      <Layout location={location}>
        <StyledSkillsShowcase>
          <StyledHeader>
            <a href="/#hire-me" className="back-link">
              Back to Hire Me
            </a>
            <h1 className="title">Skills Showcase</h1>
            <p className="subtitle">
              No skills selected. Please go back and select some skills to see my expertise.
            </p>
          </StyledHeader>
        </StyledSkillsShowcase>
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <StyledSkillsShowcase>
        <StyledHeader>
          <a href="/#hire-me" className="back-link">
            Back to Hire Me
          </a>
          <h1 className="title">Skills Showcase</h1>
          <div className="selected-skills">
            {selectedSkills.map(skill => (
              <span key={skill.name} className="skill-pill">
                {skill.name}
              </span>
            ))}
          </div>
          <p className="subtitle">
            Here's how I've applied these skills in my professional experience and projects.
          </p>{' '}
          <div className="navigation-links">
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </div>
        </StyledHeader>
        <StyledSection number="1" id="experience">
          <h2 className="section-title">
            Professional Experience
            <span className="section-icon"></span>
          </h2>
          {highlightedJobs.length > 0 ? (
            highlightedJobs.map((job, index) => (
              <StyledJobCard key={index}>
                <div className="job-header">
                  <div>
                    <h3 className="job-title">{job.frontmatter.title}</h3>
                    <div className="job-company">{job.frontmatter.company}</div>
                    <div className="job-range">{job.frontmatter.range}</div>
                  </div>
                </div>
                <div
                  className="job-description"
                  dangerouslySetInnerHTML={{ __html: job.highlightedContent }}
                />
              </StyledJobCard>
            ))
          ) : (
            <StyledEmptyState>
              <div className="empty-title">No Matching Experience</div>
              <div className="empty-text">
                I haven't used these specific skills in my documented professional experience yet.
              </div>
            </StyledEmptyState>
          )}
        </StyledSection>
        <StyledSection number="2" id="projects">
          <h2 className="section-title">Projects</h2>
          {highlightedProjects.length > 0 ? (
            highlightedProjects.map((project, index) => (
              <StyledProjectCard key={index}>
                <div className="project-header">
                  <h3 className="project-title">{project.frontmatter.title}</h3>
                  <div className="project-links">
                    {project.frontmatter.github && (
                      <a
                        href={project.frontmatter.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {project.frontmatter.external && (
                      <a
                        href={project.frontmatter.external}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                {project.frontmatter.tech && (
                  <div className="project-tech">
                    {' '}
                    {highlightSkillInTech(project.frontmatter.tech, selectedSkills).map(
                      (tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={tech.highlighted ? 'tech-highlight' : 'tech-normal'}>
                          {tech.name}
                        </span>
                      ),
                    )}
                  </div>
                )}
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: project.highlightedContent }}
                />
              </StyledProjectCard>
            ))
          ) : (
            <StyledEmptyState>
              <div className="empty-title">No Matching Projects</div>
              <div className="empty-text">
                I haven't used these specific skills in my documented projects yet, but I'm always
                learning!
              </div>
            </StyledEmptyState>
          )}{' '}
        </StyledSection>

        <StyledCTA>
          <h2 className="cta-title">Impressed by what you've seen?</h2>
          <p className="cta-subtitle">
            Let's discuss how my expertise in these technologies can help bring your next project to
            life.
          </p>{' '}
          <a href={`mailto:${email}`} className="cta-button">
            Let's Connect
          </a>
        </StyledCTA>
      </StyledSkillsShowcase>
    </Layout>
  );
};

SkillsShowcase.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default SkillsShowcase;
