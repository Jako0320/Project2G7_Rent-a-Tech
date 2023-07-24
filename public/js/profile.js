const fetchProfile = async () => {
  try {
    const profileResponse = await fetch('/api/users/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!profileResponse.ok) {
      const errorMessage = await profileResponse.text();
      throw new Error(errorMessage);
    }

    const profileData = await profileResponse.json();

    // Update the profile page with the user's name
    const nameElement = document.querySelector('.col-auto h2');
    nameElement.textContent = `Welcome, ${profileData.name}!`;

    // Fetch the user's workorders
    const projectsResponse = await fetch('/api/workorder', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!projectsResponse.ok) {
      const errorMessage = await projectsResponse.text();
      throw new Error(errorMessage);
    }

    const projectsData = await projectsResponse.json();

    const projectList = document.querySelector('.project-list');
    if (projectsData.length > 0) {
      projectList.innerHTML = '';
      projectsData.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('row', 'mb-2');
        projectElement.innerHTML = `
          <div class="col-md-8">
            <h4><a href="/project/${project.id}">${project.name}</a></h4>
          </div>
          <div class="col-md-4">
            <button class="btn btn-sm btn-danger" data-id="${project.id}">DELETE</button>
          </div>
        `;
        projectList.appendChild(projectElement);
      });
    } else {
      projectList.innerHTML = '<p>No projects found.</p>';
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    const profileErrorMessage = document.createElement('p');
    profileErrorMessage.textContent = 'Error fetching profile data.';
    document.querySelector('.col-auto').appendChild(profileErrorMessage);
  }
};

document.querySelector('.new-project-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const projectName = document.querySelector('#project-name').value.trim();
  const projectFunding = parseInt(document.querySelector('#project-funding').value);
  const projectDesc = document.querySelector('#project-desc').value.trim();

  if (projectName && projectFunding && projectDesc) {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({ name: projectName, funding: projectFunding, description: projectDesc }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      document.location.reload();
    } catch (error) {
      console.error('Error creating project:', error);
      const projectErrorMessage = document.createElement('p');
      projectErrorMessage.textContent = 'Error creating project.';
      document.querySelector('.col-md-6').appendChild(projectErrorMessage);
    }
  } else {
    alert('Please fill in all the fields.');
  }
});

fetchProfile();
