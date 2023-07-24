// Function to fetch user profile and projects
const fetchProfile = async () => {
  try {
    // Send a GET request to fetch user profile
    const profileResponse = await fetch('/api/users/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!profileResponse.ok) {
      // Handle the error if the profile fetch fails
      const errorMessage = await profileResponse.text();
      throw new Error(errorMessage);
    }

    // Parse the JSON response
    const profileData = await profileResponse.json();

    // Update the profile page with the user's name
    const nameElement = document.querySelector('.col-auto h2');
    nameElement.textContent = `Welcome, ${profileData.name}!`;

    // Fetch the user's projects
    const projectsResponse = await fetch('/api/projects', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!projectsResponse.ok) {
      // Handle the error if the projects fetch fails
      const errorMessage = await projectsResponse.text();
      throw new Error(errorMessage);
    }

    // Parse the JSON response
    const projectsData = await projectsResponse.json();

    // Update the project list on the profile page
    const projectList = document.querySelector('.project-list');
    if (projectsData.length > 0) {
      // If there are projects, update the project list
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
      // If there are no projects, display a message
      projectList.innerHTML = '<p>No projects found.</p>';
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    // Display an error message if something goes wrong
    const profileErrorMessage = document.createElement('p');
    profileErrorMessage.textContent = 'Error fetching profile data.';
    document.querySelector('.col-auto').appendChild(profileErrorMessage);
  }
};

// Attach an event listener to the "New Project" form to handle project creation
document.querySelector('.new-project-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Collect values from the project creation form
  const projectName = document.querySelector('#project-name').value.trim();
  const projectFunding = parseInt(document.querySelector('#project-funding').value);
  const projectDesc = document.querySelector('#project-desc').value.trim();

  if (projectName && projectFunding && projectDesc) {
    try {
      // Send a POST request to create a new project
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({ name: projectName, funding: projectFunding, description: projectDesc }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        // Handle the error if project creation fails
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Refresh the profile page to show the updated project list
      document.location.reload();
    } catch (error) {
      console.error('Error creating project:', error);
      // Display an error message if something goes wrong
      const projectErrorMessage = document.createElement('p');
      projectErrorMessage.textContent = 'Error creating project.';
      document.querySelector('.col-md-6').appendChild(projectErrorMessage);
    }
  } else {
    alert('Please fill in all the fields.');
  }
});

// Call the fetchProfile function to load the user profile and projects
fetchProfile();
