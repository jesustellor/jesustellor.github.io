function createProjectCard(title, description, imageUrl, link) {
  const card = document.createElement('div');
  card.classList.add('project-card');

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = title;
  card.appendChild(img);

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.textContent = description;
  card.appendChild(cardDescription);

  const cardLink = document.createElement('a');
  cardLink.href = link;
  cardLink.textContent = 'View Project';
  cardLink.target = '_blank';
  card.appendChild(cardLink);

  document.body.appendChild(card);
}


for (let i = 0; i < 10; i++) {
  createProjectCard(
    'Project Title',
    'This is a description of the project.',
    '/path/to/image.jpg',
    'https://github.com/username/project-repo'
  );
}