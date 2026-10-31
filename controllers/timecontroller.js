const axios = require('axios');
const time = require('../model/timemodel');

const fetchLocation = async () => {
  try {
   const response = await axios.get(
  'http://api.open-notify.org/iss-now.json'
);

const data = response.data;
    await time.create({
      latitude: Number(data.iss_position.latitude),
      longitude: Number(data.iss_position.longitude),
    });
await time.collection.dropIndex("timestamp_1");
await time.collection.createIndex(
  { timestamp: 1 },
  { expireAfterSeconds: 60 }
);
    console.log('Location saved');
    const indexes = await time.collection.indexes();
console.log("Collection Indexes:", indexes);
  } catch (error) {
    console.log('API error:', error.message);
  }
};

const startFetching = () => {
  fetchLocation();
  setInterval(fetchLocation, 5000);
};

module.exports = startFetching;