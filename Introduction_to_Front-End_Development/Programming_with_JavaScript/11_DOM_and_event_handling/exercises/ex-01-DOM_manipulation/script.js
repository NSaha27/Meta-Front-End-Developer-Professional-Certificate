"use strict";

// JavaScript Selectors

/*
// OLD APPROACH
// Select DOM element using ID
const title = document.getElementById("title");

// Select DOM elements using class name
const para = document.getElementsByClassName("para");

// Select DOM elements using HTML tag name
const btn = document.getElementsByTagName("button");
*/

// Using CSS selector

// NEW APPROACH
// Select DOM element using ID
const title = document.querySelector("#title");

// Select DOM elements using class name
const para = document.querySelectorAll(".para");

// Select DOM elements using HTML tag name
const btn = document.querySelector("button");

// changing content (DOM Manipulation)
title.textContent = "India's current economic condition";
para[0].textContent = "India's current economic condition reflects a mix of resilience and challenges. The country remains one of the fastest-growing major economies, driven by strong domestic demand, government-led infrastructure spending, and growth in services such as IT, finance, and digital platforms. Manufacturing is improving under initiatives like Make in India, though it still faces global competition. Inflation has moderated compared to earlier peaks but remains a concern, especially for food prices. Unemployment and underemployment, particularly among youth, continue to be key issues.";

para[1].textContent = "The banking sector is relatively stable, with improved balance sheets. Exports face pressure due to global slowdown, yet foreign investment interest remains steady. Overall, India's economy shows steady progress with cautious optimism.";

// changing HTML inside element
para[2].innerHTML = "<strong><u>Measures can be taken :</u> \nUnemployment and underemployment can be reduced by strengthening skill-based education, expanding vocational training, and aligning curricula with industry needs. Promoting MSMEs, startups, and local manufacturing can generate jobs. Encouraging entrepreneurship, improving ease of doing business, and investing in labor-intensive sectors like agriculture, construction, and services will create sustainable employment opportunities.</strong>";

// Changing Styles

// Inline styles
title.style.fontSize = "2.5rem";
title.style.fontWeight = "800";
title.style.color = "maroon";
title.style.textTransform = "capitalize";
title.style.textAlign = "center";
title.style.letterSpacing = "1px";