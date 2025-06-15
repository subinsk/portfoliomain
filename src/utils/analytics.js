// Simple client-side analytics for skill searches
export const trackSkillSearch = skills => {
  if (typeof window !== 'undefined') {
    const searches = JSON.parse(localStorage.getItem('skillSearches') || '{}');

    skills.forEach(skill => {
      searches[skill] = (searches[skill] || 0) + 1;
    });

    localStorage.setItem('skillSearches', JSON.stringify(searches));
  }
};

export const getPopularSkills = (limit = 5) => {
  if (typeof window !== 'undefined') {
    const searches = JSON.parse(localStorage.getItem('skillSearches') || '{}');
    return Object.entries(searches)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([skill]) => skill);
  }
  return [];
};

export const getSkillSearchCount = skill => {
  if (typeof window !== 'undefined') {
    const searches = JSON.parse(localStorage.getItem('skillSearches') || '{}');
    return searches[skill] || 0;
  }
  return 0;
};
