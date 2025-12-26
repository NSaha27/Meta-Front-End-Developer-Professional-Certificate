const applicants = [];

class Applicant{
  constructor(aplID, aplName, aplDOB, aplSex, aplDegree, aplAddress, aplPhone, aplEmail, aplPreferedRole){
    this.aplID = aplID;
    this.aplName = aplName;
    this.aplDOB = aplDOB;
    this.aplSex = aplSex;
    this.aplDegree = aplDegree;
    this.aplAddress = aplAddress;
    this.aplPhone = aplPhone;
    this.aplEmail = aplEmail;
    this.aplPreferedRole = aplPreferedRole;
  }
  saveEmpPersonalData(){
    const data = {
      ID: this.aplID,
      name: this.aplName,
      DOB: this.aplDOB,
      sex: this.aplSex,
      degree: this.aplDegree,
      address: this.aplAddress,
      phone: this.aplPhone,
      email: this.aplEmail,
      preferedRole: this.aplPreferedRole
    };
    try{
      applicants.push(data);
      return `*** application of the candidate <strong>${this.aplName}</strong> was successfully received !`;
    }catch(err){
      throw err;
    }
  }
  static findApplicant(aplID){
    if(typeof aplID === "number" && aplID > 0){
      const applicant = applicants.find(apl => apl.ID === aplID);
      return applicant;
    }else{
      throw new Error(
        "*** no such applicant exists with this ID !"
      );
    }
  }
}

export default Applicant;
