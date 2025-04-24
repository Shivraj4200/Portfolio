// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Project Data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform with user authentication and payment integration.",
        image: "https://via.placeholder.com/300",
        category: "web",
        tech: ["React", "Node.js", "MongoDB"],
        github: "#",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "A mobile-first task management application with real-time updates.",
        image: "https://via.placeholder.com/300",
        category: "mobile",
        tech: ["React Native", "Firebase"],
        github: "#",
        demo: "#"
    },
    // Add more projects here
];

// Education Data
const education = [
    {
        year: "2020 - 2024",
        degree: "Bachelor of Science in Computer Science",
        school: "Your University",
        description: "Relevant coursework in Data Structures, Algorithms, and Web Development."
    },
    {
        year: "2023",
        degree: "Full Stack Development Certification",
        school: "Online Platform",
        description: "Completed intensive training in modern web development technologies."
    }
];

// Populate Projects
function populateProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">GitHub</a>
                <a href="${project.demo}" target="_blank">Live Demo</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Project Filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        populateProjects(button.dataset.filter);
    });
});

// Populate Education Timeline
function populateEducation() {
    const timeline = document.querySelector('.timeline');
    education.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.degree}</h3>
                <h4>${item.school}</h4>
                <p>${item.description}</p>
                <span class="year">${item.year}</span>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateEducation();
});

// Intersection Observer for Animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


/* Projects */

  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Optional: Close modal when clicking outside
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

