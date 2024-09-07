function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    document.body.setAttribute('data-theme', themeName);
}

// Function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById('checkbox').checked = true;
    } else {
        setTheme('light');
    }
})();

// Add event listener for the theme toggle
document.getElementById('checkbox').addEventListener('change', toggleTheme);

const skills = {
    frontend: [
        { name: 'HTML', progress: 100, color: 'linear-gradient(90deg, #e74c3c, #e67e22)' },
        { name: 'CSS', progress: 80, color: 'linear-gradient(90deg, #3498db, #2980b9)' },
        { name: 'SASS', progress: 10, color: 'linear-gradient(90deg, #9b59b6, #8e44ad)' },
        { name: 'JavaScript', progress: 10, color: 'linear-gradient(90deg, #f1c40f, #f39c12)' },
        { name: 'TypeScript', progress: 10, color: 'linear-gradient(90deg, #2ecc71, #27ae60)' },
        { name: 'Material UI', progress: 70, color: 'linear-gradient(90deg, #1abc9c, #16a085)' }
    ],
    backend: [
        { name: 'PostgreSQL', progress: 10, color: 'linear-gradient(90deg, #2ecc71, #e74c3c)' },
        { name: 'Node JS', progress: 10, color: 'linear-gradient(90deg, #27ae60, #2ecc71)' },
        { name: 'Express JS', progress: 10, color: 'linear-gradient(90deg, #e67e22, #d35400)' },
        { name: 'Git', progress: 50, color: 'linear-gradient(90deg, #c0392b, #e74c3c)' }
    ]
};

function createSkillBar(skill) {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
        <div class="skill-name">
            <span>${skill.name}</span>
            <span>${skill.progress}%</span>
        </div>
        <div class="progress-bar">
            <div class="progress" style="background: ${skill.color}; width: ${skill.progress}%;"></div>
        </div>
    `;
    return skillElement;
}

function renderSkills() {
    const frontendContainer = document.getElementById('frontend-skills');
    const backendContainer = document.getElementById('backend-skills');

    skills.frontend.forEach(skill => {
        frontendContainer.appendChild(createSkillBar(skill));
    });

    skills.backend.forEach(skill => {
        backendContainer.appendChild(createSkillBar(skill));
    });
}

document.addEventListener('DOMContentLoaded', renderSkills);