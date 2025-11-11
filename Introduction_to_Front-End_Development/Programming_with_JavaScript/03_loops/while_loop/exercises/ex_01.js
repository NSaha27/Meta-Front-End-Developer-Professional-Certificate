const fetchAllVoters = require("./voterFetchPromise.js");

const findByEPICNumber = "WB/24/161/42533";

fetchAllVoters()
  .then(voterList => {
    let counter = 0;
    let isVoterFound = false;
    let selectedVoter;
    while(counter < voterList.length){
      if(voterList[counter]["epic"] === findByEPICNumber.toUpperCase()){
        isVoterFound = true;
        selectedVoter = voterList[counter];
      }
      counter++;
    }
    isVoterFound === false ? console.log("no such voter was found!") : 
    console.log(` Details of the selected voter:
    Name: ${selectedVoter["first name"]} ${selectedVoter["middle name"]} ${selectedVoter["last name"]}
    Guardian: ${selectedVoter["legal guardian"]}
    Address: ${selectedVoter["address"]}
    Part no.: ${selectedVoter["part number"]}
    Assembly: ${selectedVoter["assembly"]}
    City or Village: ${selectedVoter["city or village"]}
    District: ${selectedVoter["district"]}
    State: ${selectedVoter["state"]}
    Phone: ${selectedVoter["phone"]}
    Email ID: ${selectedVoter["email"]}`);
  })
  .catch(err => {
    console.error(err);
  })