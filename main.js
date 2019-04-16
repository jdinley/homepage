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
			const markup = `
      <ul>
        <li class="project-date">
          <span class="project-date-updated">${`Updated On: ${dateFns.format(new Date(repo.updated_at), "MM/DD/YYYY")}`}</span><br>
          <span class="project-date-created">${`Created On: ${dateFns.format(new Date(repo.created_at), "MM/DD/YYYY")}`};</span>
        </li>
        <li class="project-name"><a href="${repo.html_url}">${capWord}</a></li>
        <li class="project-lang">${`Language: ${repo.language}`};</li>
        <li class="project-desc">${`Description: ${repo.description}`};</li>
      </ul>`;

			document.querySelector(".project").insertAdjacentHTML("beforebegin", markup);
		});
	});
