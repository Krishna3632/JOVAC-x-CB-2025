fetch('https://api.github.com/users/Krishna3632')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('name').innerText = `Name: ${data.name || "No name"}`;
        document.getElementById('repos').innerText = `Public Repos: ${data.public_repos}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('name').innerText = 'Error loading data';
    });

fetch('https://api.github.com/users/Krishna3632/repos')
    .then(response => response.json())
    .then(data => {
        let i=0;
        let repoList = '';
        for (const current of data) {
            if(i==3) break;
            repoList += `<li>${current.name}</li>`;
            i++;
        }
        document.getElementById('repo').innerHTML = `<ul>${repoList}</ul>`;
    })
    .catch(error => {
        console.error('Error loading repos:', error);
    });
