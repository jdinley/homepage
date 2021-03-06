//
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
		// console.log(repositories[0]);

		repositories.forEach((repo, index) => {
			let capWord = capitalizeFirstLetter(repo.name);
			const projectDateUpdated = `Updated On: ${dateFns.format(new Date(repo.updated_at), "MM/DD/YYYY")}`;
			const projectDateCreated = `Created On: ${dateFns.format(new Date(repo.created_at), "MM/DD/YYYY")}`;
			const markup = `
      <ul class="projects">
        <li class="project-date">
          <span class="project-date-updated">${projectDateUpdated}</span><br>
          <span class="project-date-created">${projectDateCreated}</span>
        </li>
        <li class="project-name"><a href="${repo.html_url}">${capWord}</a></li>
				<li class="project-lang">
				<span>${`Language: ${repo.language}`}</span><br>
				<span>${`ID: ${repo.id}`}</span><br>
				<span>${`Branch: ${repo.branch}`}</span><br>
				<span>${`License: ${repo.license}`}</span>
				</li>
        
        <li class="project-desc">${`Description: ${repo.description}`}</li>
      </ul>`;

			document.querySelector(".project").insertAdjacentHTML("beforebegin", markup);
		});
	});
