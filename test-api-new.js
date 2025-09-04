import { parseStringPromise } from 'xml2js';

const testAPI = async () => {
  console.log('🔄 Testing Personio API...\n');
  
  try {
    const response = await fetch('https://blue-bull-technology.jobs.personio.de/xml?language=es');
    
    console.log('✅ Response Status:', response.status);
    console.log('📋 Response Headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const xmlText = await response.text();
    console.log('\n📄 XML Response Length:', xmlText.length);
    console.log('🔍 First 500 characters:');
    console.log(xmlText.substring(0, 500));
    console.log('...\n');
    
    const result = await parseStringPromise(xmlText);
    console.log('🎯 Parsed Structure Keys:', Object.keys(result));
    
    if (result.workzag && result.workzag.position) {
      console.log('📊 Number of positions found:', result.workzag.position.length);
      
      if (result.workzag.position.length > 0) {
        console.log('\n🎯 First Position Details:');
        const firstPosition = result.workzag.position[0];
        console.log('- ID:', firstPosition.id?.[0]);
        console.log('- Name:', firstPosition.name?.[0]);
        console.log('- Office:', firstPosition.office?.[0]);
        console.log('- Category:', firstPosition.recruitingCategory?.[0]);
        console.log('- Schedule:', firstPosition.schedule?.[0]);
        console.log('- Experience:', firstPosition.yearsOfExperience?.[0]);
      }
    } else {
      console.log('❌ No positions found in expected structure');
      console.log('🔍 Available keys:', Object.keys(result));
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
    console.error('🔍 Full error:', error);
  }
};

testAPI();
