const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Load services and cities data
const servicesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/services.json'), 'utf8'));
const { services, cities } = servicesData;

// Load geographical coordinates for each city
const cityCoordinates = {
  kennewick: { latitude: 46.2112, longitude: -119.1372 },
  richland: { latitude: 46.2859, longitude: -119.2473 },
  pasco: { latitude: 46.2396, longitude: -119.1372 }
};

// Load and compile the template
const templateSource = fs.readFileSync(path.join(__dirname, '../templates/service-city-template.html'), 'utf8');
const template = Handlebars.compile(templateSource);

// Function to format service title
const formatServiceTitle = (service) => {
  return service.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

// Generate pages
services.forEach(service => {
  cities.forEach(city => {
    const data = {
      serviceTitle: formatServiceTitle(service),
      CityName: city.charAt(0).toUpperCase() + city.slice(1),
      serviceName: service,
      city: city,
      latitude: cityCoordinates[city].latitude,
      longitude: cityCoordinates[city].longitude
    };
    
    const content = template(data);
    
    // Define the file path
    const filePath = path.join(__dirname, `../public/services/${service}-in-${city}/index.html`);
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    
    // Write the file
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`Generated ${filePath}`);
  });
}); 