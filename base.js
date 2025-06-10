
  const sections = document.querySelectorAll('.main');
  let currentIndex = 0;

  function updateActiveSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle('active', i === index);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if (currentIndex < sections.length - 1) {
        currentIndex++;
        updateActiveSection(currentIndex);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        currentIndex--;
        updateActiveSection(currentIndex);
      }
    }
  });

  // Initialize the first section as active
  updateActiveSection(currentIndex);

