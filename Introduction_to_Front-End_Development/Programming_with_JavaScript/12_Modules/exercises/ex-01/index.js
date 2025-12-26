import Applicant from "./applicant.js";
import { findRole } from "./job.js";

const aplForm = document.querySelector(".apl-form");
const checkBtn = document.querySelector(".check");
const aplMessage = document.querySelector(".apl-message");
const jobMessage = document.querySelector(".job-message");
const dispJobList = document.querySelector(".disp-job-list");

let aplID = 1;

aplForm.addEventListener("submit", function(ev){
  ev.preventDefault();

  const [aplName, aplDOB, aplSex, aplDegree, aplAddress, aplPhone, aplEmail, aplPreferedRole] = ev.target;

  console.log(
    aplName.value.trim(),
    aplDOB.value.trim(),
    aplSex.value.trim(),
    aplDegree.value.trim(),
    aplAddress.value.trim(),
    aplPhone.value.trim(),
    aplEmail.value.trim(),
    aplPreferedRole.value.trim()
  );

  try{
    const newApplicant = new Applicant(
      aplID,
      aplName.value.trim(),
      aplDOB.value.trim(),
      aplSex.value.trim(),
      aplDegree.value.trim(),
      aplAddress.value.trim(),
      aplPhone.value.trim(),
      aplEmail.value.trim(),
      aplPreferedRole.value.trim()
    );
    const result = newApplicant.saveEmpPersonalData();
    if(result instanceof Error)
      throw result;

    localStorage.setItem("applicant", aplID);
    aplForm.reset();
    aplMessage.classList.remove("d-none");
    aplMessage.classList.add("alert-success");
    aplMessage.innerHTML = result;

    jobMessage.classList.remove("d-none");
    jobMessage.classList.add("alert-primary");
    jobMessage.innerHTML = "*** now you can find job roles";
    checkBtn.classList.remove("disabled");

    aplID = aplID + 1;
  }catch(err){
    console.error(err.message);
  }
})

checkBtn.addEventListener("click", function(ev){
  ev.preventDefault();

  try{
    const applicant = Number(localStorage.getItem("applicant"));
    if (!isNaN(applicant)) {
      const res = Applicant.findApplicant(applicant);
      if (res instanceof Error) {
        throw res;
      } else {
        const findRoleResult = findRole(res.degree, res.preferedRole);
        if(findRoleResult instanceof Error){
          throw findRoleResult;
        }else{
          const ul = document.createElement("ul");
          ul.setAttribute("class", "list-group");
          for(let result of findRoleResult){
            const li = document.createElement("li");
            li.setAttribute(
              "class",
              "list-group-item d-flex justify-content-between align-items-center"
            );
            li.textContent = `${result.role} (salary Rs.${result.salary})`;
            const badge = document.createElement("span");
            badge.setAttribute("class", "badge text-bg-primary rounded-pill");
            badge.textContent = result.numOfVacancy;
            li.appendChild(badge);
            ul.appendChild(li);
          }
          dispJobList.appendChild(ul);
        }
      }
    } else {
      throw new Error("*** invalid localStorage key !");
    }
  }catch(err){
    console.error(err.message);
  }
})