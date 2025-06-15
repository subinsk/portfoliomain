/**
 * Skills Database Configuration
 *
 * This file contains the comprehensive list of skills that appear in the Hire Me section.
 *
 * To add new skills:
 * 1. Add the skill object to the skillsDatabase array with:
 *    - name: The exact skill name (should match usage in job/project descriptions)
 *    - category: One of the categories defined in skillCategories
 *    - color: Hex color for potential future use (currently not displayed)
 *
 * To add new categories:
 * 1. Add the category name to the skillCategories array
 * 2. Make sure to use the same category name in skill objects
 *
 * Note: Skill names should match the text used in job descriptions and project tech arrays
 * for proper highlighting functionality.
 */

export const skillsDatabase = [
  // Frontend Technologies
  { name: 'React', category: 'Frontend', color: '#61DAFB', icon: 'mdi:react' },
  { name: 'ReactJS', category: 'Frontend', color: '#61DAFB', icon: 'mdi:react' },
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E', icon: 'mdi:language-javascript' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178C6', icon: 'mdi:language-typescript' },
  { name: 'HTML', category: 'Frontend', color: '#E34F26', icon: 'mdi:language-html5' },
  { name: 'CSS', category: 'Frontend', color: '#1572B6', icon: 'mdi:language-css3' },
  {
    name: 'Styled Components',
    category: 'Frontend',
    color: '#DB7093',
    icon: 'simple-icons:styledcomponents',
  },
  { name: 'Redux', category: 'Frontend', color: '#764ABC', icon: 'mdi:redux' },
  { name: 'Next.js', category: 'Frontend', color: '#000000', icon: 'simple-icons:nextdotjs' },
  { name: 'Gatsby', category: 'Frontend', color: '#663399', icon: 'mdi:gatsby' },
  { name: 'Vue.js', category: 'Frontend', color: '#4FC08D', icon: 'mdi:vuejs' },
  { name: 'Angular', category: 'Frontend', color: '#DD0031', icon: 'mdi:angular' },
  { name: 'Canvas', category: 'Frontend', color: '#FF6B6B', icon: 'mdi:palette' },

  // Backend Technologies
  { name: 'Node.js', category: 'Backend', color: '#339933', icon: 'mdi:nodejs' },
  { name: 'Express', category: 'Backend', color: '#000000', icon: 'simple-icons:express' },
  { name: 'Flask', category: 'Backend', color: '#000000', icon: 'simple-icons:flask' },
  { name: 'Python', category: 'Backend', color: '#3776AB', icon: 'mdi:language-python' },
  { name: 'PHP', category: 'Backend', color: '#777BB4', icon: 'mdi:language-php' },
  { name: 'Java', category: 'Backend', color: '#ED8B00', icon: 'mdi:language-java' },
  { name: 'C++', category: 'Backend', color: '#00599C', icon: 'mdi:language-cpp' },
  { name: 'Go', category: 'Backend', color: '#00ADD8', icon: 'mdi:language-go' },

  // Databases
  { name: 'MongoDB', category: 'Database', color: '#47A248', icon: 'simple-icons:mongodb' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791', icon: 'simple-icons:postgresql' },
  { name: 'MySQL', category: 'Database', color: '#4479A1', icon: 'simple-icons:mysql' },
  { name: 'Redis', category: 'Database', color: '#DC382D', icon: 'simple-icons:redis' },
  { name: 'Firebase', category: 'Database', color: '#FFCA28', icon: 'mdi:firebase' },

  // Machine Learning & AI
  { name: 'TensorFlow', category: 'ML/AI', color: '#FF6F00', icon: 'simple-icons:tensorflow' },
  { name: 'PyTorch', category: 'ML/AI', color: '#EE4C2C', icon: 'simple-icons:pytorch' },
  { name: 'BERT', category: 'ML/AI', color: '#4285F4', icon: 'mdi:robot' },
  { name: 'Scikit-learn', category: 'ML/AI', color: '#F7931E', icon: 'simple-icons:scikitlearn' },
  { name: 'Pandas', category: 'ML/AI', color: '#150458', icon: 'simple-icons:pandas' },
  { name: 'NumPy', category: 'ML/AI', color: '#013243', icon: 'simple-icons:numpy' },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud', color: '#232F3E', icon: 'mdi:aws' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED', icon: 'mdi:docker' },
  { name: 'Kubernetes', category: 'DevOps', color: '#326CE5', icon: 'mdi:kubernetes' },
  { name: 'Git', category: 'DevOps', color: '#F05032', icon: 'mdi:git' },
  {
    name: 'GitHub Actions',
    category: 'DevOps',
    color: '#2088FF',
    icon: 'simple-icons:githubactions',
  },
  { name: 'Jenkins', category: 'DevOps', color: '#D24939', icon: 'simple-icons:jenkins' },

  // Testing
  { name: 'Jest', category: 'Testing', color: '#C21325', icon: 'simple-icons:jest' },
  { name: 'Cypress', category: 'Testing', color: '#17202C', icon: 'simple-icons:cypress' },
  { name: 'Selenium', category: 'Testing', color: '#43B02A', icon: 'simple-icons:selenium' },
  { name: 'Storybook', category: 'Testing', color: '#FF4785', icon: 'simple-icons:storybook' },

  // Mobile
  { name: 'React Native', category: 'Mobile', color: '#61DAFB', icon: 'mdi:react' },
  { name: 'Flutter', category: 'Mobile', color: '#02569B', icon: 'simple-icons:flutter' },
  { name: 'iOS', category: 'Mobile', color: '#000000', icon: 'mdi:apple' },
  { name: 'Android', category: 'Mobile', color: '#3DDC84', icon: 'mdi:android' },

  // Other
  { name: 'GraphQL', category: 'API', color: '#E10098', icon: 'mdi:graphql' },
  { name: 'REST API', category: 'API', color: '#009688', icon: 'mdi:api' },
  { name: 'Microservices', category: 'Architecture', color: '#FF9800', icon: 'mdi:server-network' },
  { name: 'Blockchain', category: 'Other', color: '#F7931A', icon: 'mdi:blockchain' },
  { name: 'WebRTC', category: 'Other', color: '#2196F3', icon: 'mdi:web' },
  { name: 'Socket.io', category: 'Other', color: '#010101', icon: 'simple-icons:socketdotio' },
];

export const skillCategories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'ML/AI',
  'Cloud',
  'DevOps',
  'Testing',
  'Mobile',
  'API',
  'Architecture',
  'Other',
];
