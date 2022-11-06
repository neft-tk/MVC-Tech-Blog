async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_title = document.querySelector('#blog_title').value;
    const description = document.querySelector('#description').value;
    const user_name = document.querySelector('#user_name').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        blog_title,
        description,
        user_name,
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
  