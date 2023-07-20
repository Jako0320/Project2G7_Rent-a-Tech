const workorderFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-workOrder').value.trim();
    const zip = document.querySelector('#zip-workOrder').value.trim();
    const make = document.querySelector('#make-workOrder').value.trim();
    const model = document.querySelector('#model-workOrder').value.trim();
    const issue = document.querySelector('#issue-workOrder').value.trim();
    const service = document.querySelector('#service-workOrder').value.trim();
  
    if (name && zip && make && model && issue && service) {
      const response = await fetch(`/api/workorderRoutes`, {
        method: 'POST',
        body: JSON.stringify({ name, zip, make, model, issue, service }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/workOrder');
      } else {
        alert('Failed to create work order');
      }
    }
  };
  
  document
    .querySelector('.workOrder-form')
    .addEventListener('submit', workorderFormHandler);