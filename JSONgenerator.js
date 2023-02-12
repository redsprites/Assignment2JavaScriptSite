const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dogs = data.split('* * *\r\n').map(dog => {
    const [name, breed, spayNeuter, 
      age, animalId, vaccinationStatus, 
      location, availableForAdoption, 
      type, additionalDetails] = dog.split('\r\n');
    return {
      name,
      breed,
      spayNeuter,
      age,
      animalId,
      vaccinationStatus,
      location,
      availableForAdoption,
      type,
      additionalDetails,
    };
  });

  fs.writeFile('output.json', JSON.stringify(dogs, null, 2), 'utf-8', err => {
    if (err) {
      console.error(err);
    } else {
      console.log('JSON file generated successfully!');
    }
  });
});
