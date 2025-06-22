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