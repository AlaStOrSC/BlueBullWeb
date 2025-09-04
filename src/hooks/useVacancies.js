import { useQuery } from '@tanstack/react-query';

const parseXMLPositions = (xmlString) => {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    const positions = xmlDoc.querySelectorAll('position');
    
    return Array.from(positions).map(position => {
      const getTextContent = (tagName) => {
        const element = position.querySelector(tagName);
        return element ? element.textContent.trim() : '';
      };

      return {
        id: getTextContent('id'),
        name: getTextContent('name'),
        office: getTextContent('office'),
        recruitingCategory: getTextContent('recruitingCategory'),
        schedule: getTextContent('schedule'),
        yearsOfExperience: getTextContent('yearsOfExperience'),
        department: getTextContent('department'),
        employmentType: getTextContent('employmentType'),
        seniority: getTextContent('seniority'),
        createdAt: getTextContent('createdAt'),
      };
    }).filter(position => position.id && position.name);
  } catch (error) {
    console.error('Error parsing XML:', error);
    return [];
  }
};

const fetchVacancies = async () => {
  try {
    console.log('Fetching vacancies from API...');
    const response = await fetch('https://blue-bull-technology.jobs.personio.de/xml?language=es', {
      method: 'GET',
      headers: {
        'Accept': 'application/xml, text/xml, */*',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    console.log('XML Response received');
    
    if (!xmlText || xmlText.trim() === '') {
      throw new Error('Empty response from API');
    }
    
    const positions = parseXMLPositions(xmlText);
    console.log('Parsed positions:', positions);
    
    return positions;
  } catch (error) {
    console.error('Error fetching vacancies:', error);
    return [];
  }
};

export const useVacancies = () => {
  return useQuery({
    queryKey: ['vacancies'],
    queryFn: fetchVacancies,
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
