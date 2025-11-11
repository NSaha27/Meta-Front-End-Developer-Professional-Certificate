const voters = JSON.stringify([
  {
    "epic": "WB/24/161/42533",
    "first name": "Arvind",
    "middle name": "Kumar",
    "last name": "Aggarwal",
    "sex": "m",
    "legal guardian": "Aatma Ram Aggarwal",
    "guardian epic": "WB/24/161/32728",
    "address": "42B/1/A Gardeners Road, Liluah, Howrah, WB, 711205",
    "part number": "161",
    "assembly": "Bally",
    "city or village": "Liluah",
    "district": "Howrah",
    "state": "West Bengal",
    "phone": "+918420520392",
    "email": "arvind.kumar31@example.com"
  },
  {
    "epic": "ZXM1234567",
    "first name": "Gaurav",
    "middle name": "Kumar",
    "last name": "Patil",
    "sex": "m",
    "legal guardian": "Gurjar Narayan Patil",
    "guardian epic": "ZXM7591035",
    "address": "7A/2/1 Gangadhar Tilak Road, Parel, Mumbai, 400012",
    "part number": "628",
    "assembly": "Parel",
    "city or village": "Mumbai",
    "district": "Mumbai City",
    "state": "Maharashtra",
    "phone": "+917249825371",
    "email": "gaurav.kumar36@example.com"
  },
  {
    "epic": "NDH9053082",
    "first name": "Jyotika",
    "middle name": "",
    "last name": "Singh",
    "sex": "f",
    "legal guardian": "Jagjit Singh",
    "guardian epic": "NDH7240195",
    "address": "House No. 123, Model Town, Near Axis Bank, Delhi, Delhi, 110009",
    "part number": "18",
    "assembly": "Model Town",
    "city or village": "Delhi",
    "district": "North Delhi",
    "state": "Delhi",
    "phone": "+918240725381",
    "email": "jyotika.singh28@example.com"
  }
]);

function fetchAllVoters(){
  const fetchVoterPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const votersObj = JSON.parse(voters);
      resolve(votersObj);
    }, 500);
  });
  return fetchVoterPromise;
}

module.exports = fetchAllVoters;