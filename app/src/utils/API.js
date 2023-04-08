import axios from 'axios';

const client = axios.create({
  baseURL: "https://chronicle-backend.onrender.com/" 
});


export default {

  // User authentication API calls

  // imported from App.js (check for a valid token)
  checkValidToken: function (token) {
    return client.post('/isValidToken', null, {
      headers: { 'x-auth-token': token },
    });
  },

  // imported from App js (after checking the token is valid,fetching the user information)
  authenticateUser: function (token) {
    return client.post('/', { headers: { 'x-auth-token': token } });
  },

  // imported login page(End Point to pass the user entered information to backend and to check the login validations)
  loginRes: function (loginUser) {
    return client.post('/api/login', loginUser);
  },

  // imported from Signup page(End Point to pass the user signed up info to backend and store it)
  SignUpRes: function (newUser) {
    return client.post('/api/signup', newUser);
  },

  
  // Journal API calls :
  
  //  check Journal entry for the the particular entry date
  checkAJournalEntry: function (entryDate, userId) {
    return client.get('/api/notes/entrydate/' + entryDate, {
      params: { userId },
    });
  },

  // Create journal entry
  createJournalEntry: function (journalEntry) {
    return client.post('/api/notes', journalEntry);
  },

  // Get one entry by noteId and userId
  getOneJournalEntry: function (noteId, userId) {
    return client.get('/api/notes/' + noteId, { params: { userId } });
  },

  // Update one entry by noteId, userId
  updateOneJournalEntry: function (noteId, userId, updatedEntry) {
    return client.put('/api/notes/' + noteId, updatedEntry, {
      params: { userId },
    });
  },

// check Journal entries based on search results for particular month
  checkASearchJournalEntry: function (month,year, userId) {
    console.log(' user id : ' + userId + "month :" +month +"year :" + year);
    return client.get('/api/notes' ,{
      params: { month,year,userId }
    });
  },

  // Delete one entry by noteId, userId
  removeOneJournalEntry: function (noteId, userId) {
    return client.delete('/api/notes/' + noteId, { params: { userId } });
  },
};
