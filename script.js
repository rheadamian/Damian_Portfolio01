// ✅ 1. let and const
const user = {
  name: "Rhea",
  hobbies: ["Reading", "Listening to Music", "Watching K-dramas"],
  skills: ["Writing", "Communication", "Strong Work Ethic", "Creativity"]
};
let greetCount = 0;

// ✅ 2. Destructuring
const { name, hobbies, skills } = user;

// ✅ 3. Template Literal
document.getElementById("intro").textContent = `Welcome to ${name}'s Portfolio`;
document.getElementById("tagline").textContent = `Hi! I'm ${name}, an aspiring professional who loves creativity and collaboration.`;

// ✅ 4. Spread Operator (merge two project arrays)
const webProjects = ["Personal Blog", "Portfolio Website"];
const creativeProjects = ["Short Stories", "Photography"];
const allProjects = [...webProjects, ...creativeProjects]; // spread used

// ✅ 5. Arrow Function
const displayList = (title, items) => {
  document.getElementById("listTitle").textContent = title;
  document.getElementById("list").innerHTML = items.map(i => `<li>${i}</li>`).join("");
};

// Event listeners
document.getElementById("showSkills").onclick = () => displayList("My Skills:", skills);
document.getElementById("showHobbies").onclick = () => displayList("My Hobbies:", hobbies);

// ✅ 6. Loop (to dynamically show projects)
const projectContainer = document.getElementById("projectContainer");
for (const project of allProjects) {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `<h3>${project}</h3><p>Click to learn more soon!</p>`;
  projectContainer.appendChild(div);
}

// ✅ 7. Rest Operator + Arrow Function
const greet = (...times) => {
  alert(`Hi! You've greeted ${times.length} time(s).`);
};

// Greeting button interaction
document.getElementById("greetBtn").onclick = () => {
  greetCount++;
  greet(...Array(greetCount).fill("👋"));
};
