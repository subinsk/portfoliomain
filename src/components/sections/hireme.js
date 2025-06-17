import React, { useState, useRef, useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { skillsDatabase } from '@data/skills';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { trackSkillSearch } from '@utils/analytics';
import { usePrefersReducedMotion } from '@hooks';

const StyledHireMeSection = styled.section`
  max-width: 1000px;
  margin: 0 auto 100px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 0 auto 80px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    margin: 0 auto 60px;
    padding: 0 10px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
      margin-bottom: 15px;
    }

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 8vw, 80px);
    margin-bottom: 20px;

    @media (max-width: 480px) {
      margin-bottom: 15px;
    }
  }

  .subtitle {
    color: var(--slate);
    font-size: var(--fz-lg);
    margin-bottom: 50px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: var(--fz-md);
      margin-bottom: 40px;
      max-width: 100%;
    }

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
      margin-bottom: 30px;
      line-height: 1.6;
    }
  }
`;

const StyledSearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    margin: 0 auto 30px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    margin: 0 auto 25px;
  }
`;

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  font-size: var(--fz-lg);
  background-color: var(--light-navy);
  border: 2px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  color: var(--lightest-slate);
  transition: var(--transition);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: var(--fz-md);
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: var(--fz-sm);
  }

  &:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &::placeholder {
    color: var(--slate);

    @media (max-width: 480px) {
      font-size: var(--fz-xs);
    }
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--navy);
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: 5px;
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
`;

const StyledDropdownItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px; /* Touch-friendly minimum height */

  @media (max-width: 768px) {
    padding: 14px 16px;
  }

  @media (max-width: 480px) {
    padding: 16px 14px;
    min-height: 48px;
  }

  &:hover {
    background-color: var(--light-navy);
  }

  /* Touch devices */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      background-color: var(--light-navy);
    }
  }

  .skill-info {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;

    @media (max-width: 480px) {
      gap: 8px;
    }
  }

  .skill-name {
    color: var(--lightest-slate);

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }
  }

  .skill-category {
    font-size: var(--fz-xs);
    color: var(--slate);
    background-color: var(--lightest-navy);
    padding: 2px 8px;
    border-radius: 12px;
    white-space: nowrap;

    @media (max-width: 480px) {
      font-size: var(--fz-xxs);
      padding: 2px 6px;
    }
  }
`;

const StyledSelectedSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-bottom: 20px;
  }
`;

const StyledSkillPill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  background-color: ${props => (props.disabled ? 'rgba(100, 255, 218, 0.1)' : 'var(--light-navy)')};
  border: 1px solid ${props => (props.disabled ? 'var(--green)' : 'var(--lightest-navy)')};
  border-radius: 25px;
  color: ${props => (props.disabled ? 'var(--green)' : 'var(--lightest-slate)')};
  font-size: var(--fz-sm);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-width: 80px;
  user-select: none;
  opacity: ${props => (props.disabled ? 0.8 : 1)};
  transform: ${props => (props.disabled ? 'scale(0.95)' : 'scale(1)')};
  min-height: 44px; /* Touch-friendly minimum height */

  @media (max-width: 768px) {
    padding: 10px 16px;
    gap: 6px;
    font-size: var(--fz-xs);
    min-height: 48px;
    min-width: 90px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    gap: 6px;
    font-size: var(--fz-xs);
    min-height: 56px;
    min-width: 110px;
    border-radius: 28px;
  }

  &:hover {
    border-color: var(--green);
    background-color: ${props =>
    props.disabled ? 'rgba(100, 255, 218, 0.2)' : 'rgba(100, 255, 218, 0.1)'};
    transform: ${props => (props.disabled ? 'scale(0.95)' : 'scale(1.02)')};

    @media (max-width: 480px) {
      transform: ${props => (props.disabled ? 'scale(0.98)' : 'scale(1.01)')};
    }
  }

  /* Touch devices */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98);
      background-color: ${props =>
    props.disabled ? 'rgba(100, 255, 218, 0.2)' : 'rgba(100, 255, 218, 0.1)'};
    }
  }
  .remove-btn {
    background: none;
    border: none;
    color: var(--lightest-slate);
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.2s ease;
    margin-left: 4px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      margin-left: 4px;
    }

    @media (max-width: 480px) {
      width: 36px;
      height: 36px;
      margin-left: 6px;
    }

    &:hover {
      color: var(--lightest-slate);
      background-color: rgba(100, 255, 218, 0.1);
      transform: scale(1.1);
    }

    /* Touch devices */
    @media (hover: none) and (pointer: coarse) {
      &:active {
        transform: scale(1.1);
        background-color: rgba(100, 255, 218, 0.2);
      }
    }

    svg {
      width: 20px;
      height: 20px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }

      @media (max-width: 480px) {
        width: 22px;
        height: 22px;
      }
    }
  }

  .package-icon {
    font-size: 26px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    flex-shrink: 0;

    @media (max-width: 768px) {
      margin-right: 6px;
    }

    @media (max-width: 480px) {
      margin-right: 8px;
    }

    svg {
      width: 26px;
      height: 26px;

      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
      }

      @media (max-width: 480px) {
        width: 26px;
        height: 26px;
      }
    }
  }
  .add-btn {
    background: none;
    border: none;
    color: var(--lightest-slate);
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: none;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      margin-left: 4px;
    }

    @media (max-width: 480px) {
      width: 36px;
      height: 36px;
      margin-left: 6px;
    }

    /* Touch devices */
    @media (hover: none) and (pointer: coarse) {
      &:active {
        transform: scale(1.1);
        background-color: rgba(100, 255, 218, 0.1);
      }
    }

    svg {
      width: 20px;
      height: 20px;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }

      @media (max-width: 480px) {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

const StyledSuggestedSkills = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: var(--fz-md);
      margin-bottom: 16px;
    }

    @media (max-width: 480px) {
      font-size: var(--fz-sm);
      margin-bottom: 14px;
    }
  }
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      gap: 6px;
    }

    @media (max-width: 480px) {
      gap: 4px;
    }
  }
`;

const StyledSearchButton = styled.button`
  ${({ theme }) => theme.mixins.button};
  margin-top: 20px;
  disabled: ${props => props.disabled};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  min-height: 48px; /* Touch-friendly minimum height */
  padding: 12px 24px;
  font-size: var(--fz-md);

  @media (max-width: 768px) {
    margin-top: 16px;
    min-height: 52px;
    padding: 14px 20px;
    font-size: var(--fz-sm);
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 480px) {
    margin-top: 14px;
    min-height: 56px;
    padding: 16px 20px;
    font-size: var(--fz-sm);
    width: 100%;
    max-width: none;
  }

  &:disabled:hover {
    transform: none;
    box-shadow: none;
  }

  /* Touch devices */
  @media (hover: none) and (pointer: coarse) {
    &:not(:disabled):active {
      transform: translateY(1px);
    }
  }
`;

const HireMe = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = skillsDatabase.filter(
        skill =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !selectedSkills.some(selected => selected.name === skill.name),
      );
      setFilteredSkills(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchTerm, selectedSkills]);
  const suggestedSkills = [
    'React',
    'Node.js',
    'JavaScript',
    'Python',
    'TypeScript',
    'MongoDB',
    'Express',
    'AWS',
    'Docker',
  ]
    .map(name => {
      const skill = skillsDatabase.find(skill => skill.name === name);
      if (!skill) {
        console.warn(`Skill not found in database: ${name}`);
      }
      return skill;
    })
    .filter(Boolean);
  const handleSkillToggle = skill => {
    const isSelected = selectedSkills.some(selected => selected.name === skill.name);
    if (isSelected) {
      setSelectedSkills(selectedSkills.filter(s => s.name !== skill.name));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setSearchTerm('');
    setShowDropdown(false);
  };

  const handleSearch = () => {
    if (selectedSkills.length === 0) {
      return;
    }

    const skillNames = selectedSkills.map(skill => skill.name);

    // Track the search for analytics
    trackSkillSearch(skillNames);

    const searchParams = new URLSearchParams();
    searchParams.append('skills', skillNames.join(','));

    navigate(`/skills-showcase?${searchParams.toString()}`);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledHireMeSection id="hire-me" ref={revealContainer}>
      <h2 className="numbered-heading overline">Hire Me</h2>

      <h3 className="title">Find Your Perfect Developer</h3>

      <p className="subtitle">
        Looking for specific skills? Search and select the technologies you need, and I'll show you
        exactly how I've used them in real projects.
      </p>

      <StyledSearchContainer>
        <StyledSearchInput
          type="text"
          placeholder="Search for skills (e.g., React, Node.js, Python...)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        {showDropdown && filteredSkills.length > 0 && (
          <StyledDropdown>
            {' '}
            {filteredSkills.slice(0, 8).map(skill => (
              <StyledDropdownItem key={skill.name} onClick={() => handleSkillToggle(skill)}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </StyledDropdownItem>
            ))}
          </StyledDropdown>
        )}
      </StyledSearchContainer>

      {selectedSkills.length > 0 && (
        <StyledSelectedSkills>
          {selectedSkills.map(skill => (
            <StyledSkillPill
              key={skill.name}
              onClick={() => handleSkillToggle(skill)}
              clickable
              tabIndex={0}
              role="button"
              aria-label={`Remove ${skill.name}`}>
              {' '}
              <span className="package-icon">
                <Icon
                  icon={skill.icon || 'mdi:package-variant-closed'}
                  color="var(--lightest-slate)"
                  width="26"
                  height="26"
                />
              </span>
              <span>{skill.name}</span>
              <button
                className="remove-btn"
                onClick={e => {
                  e.stopPropagation();
                  handleSkillToggle(skill);
                }}
                aria-label={`Remove ${skill.name}`}
                tabIndex={-1}>
                <Icon
                  icon="mdi:close-circle"
                  color="var(--lightest-slate)"
                  width="20"
                  height="20"
                />
              </button>
            </StyledSkillPill>
          ))}
        </StyledSelectedSkills>
      )}

      <StyledSuggestedSkills>
        <h3>Popular Skills</h3>{' '}
        <div className="skills-grid">
          {suggestedSkills.map(skill => {
            const isSelected = selectedSkills.some(selected => selected.name === skill.name);
            return (
              <StyledSkillPill
                key={skill.name}
                disabled={isSelected}
                onClick={() => handleSkillToggle(skill)}
                clickable
                tabIndex={0}
                role="button"
                aria-label={isSelected ? `Remove ${skill.name}` : `Add ${skill.name}`}>
                {' '}
                <span className="package-icon">
                  <Icon
                    icon={skill.icon || 'mdi:package-variant-closed'}
                    color={isSelected ? 'var(--green)' : 'var(--lightest-slate)'}
                    width="26"
                    height="26"
                  />
                </span>
                <span>{skill.name}</span>
                <button
                  className={isSelected ? 'remove-btn' : 'add-btn'}
                  onClick={e => {
                    e.stopPropagation();
                    handleSkillToggle(skill);
                  }}
                  aria-label={isSelected ? `Remove ${skill.name}` : `Add ${skill.name}`}
                  tabIndex={-1}>
                  <Icon
                    icon={isSelected ? 'mdi:close-circle' : 'mdi:plus-circle'}
                    color={isSelected ? 'var(--green)' : 'var(--lightest-slate)'}
                    width="24"
                    height="24"
                  />
                </button>
              </StyledSkillPill>
            );
          })}
        </div>
      </StyledSuggestedSkills>

      <StyledSearchButton onClick={handleSearch} disabled={selectedSkills.length === 0}>
        Show My Expertise ({selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''}{' '}
        selected)
      </StyledSearchButton>
    </StyledHireMeSection>
  );
};

export default HireMe;
