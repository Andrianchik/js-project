const projectsContainer = document.getElementById('projects-container');
const loadMoreBtn = document.getElementById('load-more-btn');

const newProjects = [
  {
    img: 'images/project4.jpg',
    tech: 'React, Node.js, MongoDB',
    title: 'New Project 1',
    link: 'https://github.com/project4'
  },
  {
    img: 'images/project5.jpg',
    tech: 'Vue, Firebase',
    title: 'New Project 2',
    link: 'https://github.com/project5'
  },
  {
    img: 'images/project6.jpg',
    tech: 'Angular, Express.js',
    title: 'New Project 3',
    link: 'https://github.com/project6'
  }
];

loadMoreBtn.addEventListener('click', () => {
  newProjects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <p class="project-tech">${project.tech}</p>
        <h3 class="project-title">${project.title}</h3>
        <a href="${project.link}" class="visit-button" target="_blank">
          Visit
          <img src="images/arrow.svg" alt="Arrow" class="visit-icon">
        </a>
      </div>
    `;

    // Додаємо нові картки перед кнопкою Load More
    projectsContainer.insertBefore(card, loadMoreBtn);
  });

  // Після додавання нових проектів - ховаємо кнопку
  loadMoreBtn.style.display = 'none';
});
