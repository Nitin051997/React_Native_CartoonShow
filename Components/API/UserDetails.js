// Replace 'YOUR_FILE_ID' with the actual file ID
const fileID = '1AQuQvEklIsTJEMM8NjzDoqV2JR0QUQuc';
const apiKey = 'YOUR_GOOGLE_API_KEY';

// Construct the API URL -- ?alt=media&key=${apiKey}
// const apiUrl = `https://www.googleapis.com/drive/v3/files/${fileID}`;
const apiUrl = `https://drive.google.com/file/d/1AQuQvEklIsTJEMM8NjzDoqV2JR0QUQuc/view?usp=drivesdk`;

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Now 'data' contains the contents of your JSON file
  })
  .catch(error => {
    console.error('Error fetching file:', error);
  });
