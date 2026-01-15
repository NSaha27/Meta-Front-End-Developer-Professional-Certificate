const root = document.querySelector("#root");

const news = {
  indian: [
    "India is preparing to evacuate its nationals from Iran, with the first flight likely scheduled for tomorrow, due to escalating tensions in the Middle East.", 
    "The Supreme Court stayed the Kolkata Police's investigation (FIR) into Enforcement Directorate (ED) officials regarding the I-PAC raids, citing potential \"lawlessness\" if central agency probes are obstructed.", 
    "Exit polls for the Maharashtra civic body (BMC) elections predict a clear victory for the BJP-Eknath Shinde alliance.", 
    "An Air India flight returning to Delhi due to closed Iranian airspace suffered engine damage after a baggage container was sucked in during taxiing in dense fog at IGI airport.", 
    "A controversy erupted during the Maharashtra civic polls over the use of marker pens instead of indelible ink, with videos showing the ink could be wiped off, prompting an Election Commission probe.", 
    "The Indian Coast Guard seized a Pakistani fishing boat with nine crew members inside Indian waters near the International Maritime Boundary Line."
  ],
  world: [
    "Tensions between the U.S. and Iran remain high, with an Iranian state TV broadcast airing a warning with a Donald Trump image, while the U.S. moved a carrier strike group to the Middle East.",
    "U.S. President Donald Trump threatened to deploy the military using the Insurrection Act in Minnesota amid anti-ICE (Immigration and Customs Enforcement) protests and related violence.",
    "A SpaceX capsule carrying four astronauts from the International Space Station (ISS) safely splashed down on Earth in the first-ever medical evacuation from the orbiting lab.",
    "Japan and the Philippines signed a new defence pact to boost security cooperation in the face of China's aggression in the region",
    "A major construction accident occurred in Thailand for the second consecutive day, with a crane collapse reportedly killing at least one person.",
    "Wikipedia, the world's largest online information resource, is celebrating its 25th anniversary"
  ]
}

// creating a heading element
const h1 = document.createElement("h1");
h1.setAttribute("id", "main-heading");
h1.textContent = "Important News on " + new Date().toLocaleDateString();
root.appendChild(h1);

const p = document.createElement("p");
p.setAttribute("class", "para");
p.textContent = "Here is a list of some important Indian and Global news of today -";
root.appendChild(p);

for(let category in news){
  const div = document.createElement("div");
  div.setAttribute("class", "news-category");

  const h3 = document.createElement("h3");
  h3.setAttribute("id", `${category}-news`);
  h3.setAttribute("class", "news-category-title");
  h3.textContent = category.toUpperCase() + " NEWS:";
  div.appendChild(h3);
  
  const ul = document.createElement("ul");
  ul.setAttribute("id", "news-category-list");
  for(let n of news[category]){
    const li = document.createElement("li");
    li.setAttribute("class", "news-item");
    li.textContent = n;
    ul.appendChild(li);
  }
  div.appendChild(ul);
  root.appendChild(div);
}

