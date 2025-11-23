// student's personal details
const stuName = "Arnab Roy";
const stuClass = 10;
const stuSection = "B";
const stuRoll = 9;

// student's examination marks details
const marksInBengali = 132;
const marksInEnglish = 88;
const marksInMath = 65;
const marksInLifeSci = 87;
const marksInPhySci = 91;
const marksInHistory = 75;
const marksInGeo = 59;
const marksInEnvSci = 82;
const marksInAddt = 89; 

(
  function(stuName, stuClass, stuSection, stuRoll){
    console.log("Student Personal Details:")
    console.table(
      {
        Name: stuName,
        Class: stuClass,
        Section: stuSection,
        Roll: stuRoll
      }
    );
    console.log();
  }
)(stuName, stuClass, stuSection, stuRoll);

(
  function(marksInBengali, marksInEnglish, marksInMath, marksInLifeSci, marksInPhySci, marksInHistory, marksInGeo, marksInEnvSci, marksInAddt){
    console.log("Student Marks:");
    console.table({
      Bengali: marksInBengali,
      English: marksInEnglish,
      Math: marksInMath,
      "Life Science": marksInLifeSci,
      "Physical Science": marksInPhySci,
      History: marksInHistory,
      Geography: marksInGeo,
      "Environmental Science": marksInEnvSci,
      Aiitional: marksInAddt
    });
  }
)(marksInBengali, marksInEnglish, marksInMath, marksInLifeSci, marksInPhySci, marksInHistory, marksInGeo, marksInEnvSci, marksInAddt);