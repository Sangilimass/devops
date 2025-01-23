document.getElementById('download-btn').addEventListener('click', () => {
    const url = document.getElementById('url-input').value;
    if (!url) {
      alert('Please paste a valid URL.');
      return;
    }
  
    // Show loading spinner
    const button = document.getElementById('download-btn');
    button.innerHTML = 'Processing...';
    button.disabled = true;
  
    // Simulate backend request
    setTimeout(() => {
      alert('Download started!');
      button.innerHTML = 'Download';
      button.disabled = false;
    }, 2000);
  });