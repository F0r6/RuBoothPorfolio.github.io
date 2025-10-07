// breadcrumbs.js
document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbList = document.getElementById('breadcrumbs');
    const currentPath = window.location.pathname;
    let history = JSON.parse(localStorage.getItem('breadcrumbHistory')) || [];

    // Map paths to display names
    const pathNames = {
        '/about.html': 'About Me',
        '/programming.html': 'Programming',
        '/modelling.html': '3D Modelling',
        '/gallery.html': 'Gallery',
        // Add more paths and their display names as needed
    };

    if (!history.includes(currentPath)) {
        history.push(currentPath);
        localStorage.setItem('breadcrumbHistory', JSON.stringify(history));
    }

    history.forEach((path, index) => {
        if (index > 0) { // Skip the first element (which should be the root)
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = path;
            a.textContent = pathNames[path] || path.substring(1) || 'Home'; // Use the display name if available
            li.appendChild(a);
            breadcrumbList.appendChild(li);
        }
    });
});
