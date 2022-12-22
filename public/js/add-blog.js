async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_title = document.querySelector('#blog_title').value;
    const description = document.querySelector('#description').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title: blog_title,
        body: description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog');
    }
  }
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  