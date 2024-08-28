document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const postForm = document.getElementById('post-form');
    const formMessage = document.getElementById('form-message');

    // Function to fetch and display posts
    function fetchPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        displayPosts(posts);
    }

    function displayPosts(posts) {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>Author:</strong> ${post.author}</p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postDiv);
        });
    }

    // Handle form submission
    postForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value;

        const post = {
            title,
            content,
            author
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        formMessage.textContent = 'Post submitted successfully!';
        formMessage.className = 'success';

        postForm.reset();
    });

    // Display posts on the index page
    if (postsContainer) {
        fetchPosts();
    }
});
