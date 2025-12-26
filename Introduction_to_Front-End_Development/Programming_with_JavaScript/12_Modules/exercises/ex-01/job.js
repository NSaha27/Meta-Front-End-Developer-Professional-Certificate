const jobs = {
  bcom: {
    accountant: [
      {
        role: "Junior Accountant",
        salary: 16000,
        numOfVacancy: 5
      },
      {
        role: "Senior Accountant",
        salary: 22000,
        numOfVacancy: 1
      },
    ],
    manager: [],
    auditor: [],
  },
  mcom: {
    accountant: [
      {
        role: "Senior Accountant",
        salary: 22000,
        numOfVacancy: 1
      },
    ],
    manager: [
      {
        role: "Accounts Manager",
        salary: 25000,
        numOfVacancy: 1
      },
      {
        role: "Inventory Manager",
        salary: 25000,
        numOfVacancy: 0
      },
    ],
    auditor: [
      {
        role: "Associate Finance Auditor",
        salary: 28000,
        numOfVacancy: 1
      },
      {
        role: "Associate Inventory Auditor",
        salary: 28000,
        numOfVacancy: 1
      },
    ],
  },
  btech: {
    developer: [
      {
        role: "Junior Developer",
        salary: 18000,
        numOfVacancy: 8
      },
      {
        role: "Senior Developer",
        salary: 26000,
        numOfVacancy: 2
      },
    ],
    manager: [],
    aiEngineer: [
      {
        role: "Junior AI Engineer",
        salary: 28000,
        numOfVacancy: 2
      },
    ],
    cloudEngineer: [
      {
        role: "Junior Cloud and DevOps Engineer",
        salary: 28000,
        numOfVacancy: 3
      },
    ],
    tester: [
      {
        role: "Software Quality Analyst",
        salary: 25000,
        numOfVacancy: 0
      },
    ],
  },
  mtech: {
    developer: [],
    manager: [
      {
        role: "Development Manager",
        salary: 34000,
        numOfVacancy: 0
      },
    ],
    aiEngineer: [
      {
        role: "Senior AI Engineer",
        salary: 35000,
        numOfVacancy: 1
      },
    ],
    cloudEngineer: [
      {
        role: "Senior Cloud and DevOps Engineer",
        salary: 32000,
        numOfVacancy: 1
      },
    ],
    tester: [
      {
        role: "Senior Software Quality Analyst",
        salary: 32000,
        numOfVacancy: 1
      },
    ],
  },
  bca: {
    developer: [
      {
        role: "Junior Developer",
        salary: 18000,
        numOfVacancy: 8
      },
      {
        role: "Senior Developer",
        salary: 26000,
        numOfVacancy: 2
      },
    ],
    manager: [],
    aiEngineer: [
      {
        role: "Junior AI Engineer",
        salary: 28000,
        numOfVacancy: 2
      },
    ],
    cloudEngineer: [],
    tester: [
      {
        role: "Junior Software Quality Analyst",
        salary: 25000,
        numOfVacancy: 0
      },
    ],
  },
  mca: {
    developer: [
      {
        role: "Senior Developer",
        salary: 26000,
        numOfVacancy: 2
      },
    ],
    manager: [],
    aiEngineer: [
      {
        role: "Senior AI Engineer",
        salary: 35000,
        numOfVacancy: 1
      },
    ],
    cloudEngineer: [
      {
        role: "Senior Cloud and DevOps Engineer",
        salary: 32000,
        numOfVacancy: 1
      }
    ],
    tester: [
      {
        role: "Senior Software Quality Analyst",
        salary: 32000,
        numOfVacancy: 1
      },
    ],
  },
};

function findRole(degree, role){
  if((typeof degree === "string" && degree.length > 0) && (typeof role === "string" && role.length > 0)){
    if(Object.hasOwn(jobs, degree)){
      if(Object.hasOwn(jobs[degree], role)){
        return jobs[degree][role];
      }else{
        throw new Error(`*** there is no such job roles available with the title ${role} for ${degree} candidates, in our job portal !`);
      }
    }else{
      throw new Error(`*** there is no job available for ${degree} candidates in our job portal !`);
    }
  }else{
    throw new Error("*** invalid degree or role !");
  }
}

export { findRole, jobs };

