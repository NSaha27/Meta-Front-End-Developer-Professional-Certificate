/*
  Map is just like an object in JavaScript, but it doesn't have inheritance, protype. It is suitable to store data only.
*/

const applicant = new Map();
applicant.set("sl", 1);
applicant.set("name", "Niladri Saha");
applicant.set("gender", "M");
applicant.set("address", "Howrah");
applicant.set("phone", "+918420530244");
applicant.set("email", "sahaniladri25y@gmail.com");
applicant.set("qualification", "B.Com(Hons.)");
applicant.set("certifications", ["Meta Front-end Developer", "IBM Back-end Developer", "IBM AI Developer", "AWS Certified DevOps and Cloud Engineer"]);

console.log(`Applicant details:
Name: ${applicant.get("name")}
Gender: ${applicant.get("gender")}

Contact details:
Phone: ${applicant.get("phone")}
Email ID: ${applicant.get("email")}

Qualification:
${applicant.get("qualification")}

Certifications:
${applicant.get("certifications").toString()}
`);