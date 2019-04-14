//
const projectDateUpdated = document.querySelectorAll(".project-date-updated");
const projectDateCreated = document.querySelectorAll(".project-date-created");
const projectName = document.querySelectorAll(".project-name");
const projectLang = document.querySelectorAll(".project-lang");
const projectDesc = document.querySelectorAll(".project-desc");

// Capitalize the first letter of the string sent to function.
function capitalizeFirstLetter(string) {
	// console.log(string);
	return string.charAt(0).toUpperCase() + string.slice(1);
}

fetch("https://api.github.com/users/jdinley/repos")
	.then(function(response) {
		return response.json();
	})
	.then(function(repositories) {
		repositories.forEach((repo, index) => {
			// const p = document.createElement("p");
			// p.textContent = repo.name;
			// document.querySelector(".project").appendChild(p);
			let capWord = capitalizeFirstLetter(repo.name);
			const markup = `
      <ul>
        <li class="project-date">
          <span class="project-date-updated">${`Updated On: ${dateFns.format(new Date(repo.updated_at), "MM/DD/YYYY")}`}</span><br>
          <span class="project-date-created">${`Created On: ${dateFns.format(new Date(repo.created_at), "MM/DD/YYYY")}`};</span>
        </li>
        <li class="project-name">${capWord}</li>
        <li class="project-lang">${`Language: ${repo.language}`};</li>
        <li class="project-desc">${`Description: ${repo.description}`};</li>
      </ul>`;

			// var node = document.createElement("div");
			// var textNode = document.createTextNode(markup);
			// node.appendChild(textNode);
			// document.querySelector(".project").appendChild(node);
			document.querySelector(".project").insertAdjacentHTML("beforebegin", markup);
			// document.body.innerHTML = markup;

			console.log(markup);

			// console.log(`Updated On: ${dateFns.format(new Date(repo.updated_at), "DD MMMM YYYY")}`);
			// console.log(`Created On: ${dateFns.format(new Date(repo.created_at), "DD MMMM YYYY")}`);
			// console.log(`Repository Name: ${repo.name}`);
			// console.log(`Language: ${repo.language}`);
			// console.log(`Description: ${repo.description}`);
			// console.log("-----------------------------------------------");
		});
	});
