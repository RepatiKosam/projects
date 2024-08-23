const container = document.getElementById("container");
const projects = [
    { name: 'Hello World', link: 'https://repatikosam.github.io/first'},
    { name: 'Dice', link: 'https://repatikosam.github.io/dice'},
    { name: 'Time', link: 'https://repatikosam.github.io/time'},
    { name: 'Quiz', link: 'https://repatikosam.github.io/quiz'},
    { name: 'Chat', link: 'https://repatikosam.github.io/chat-frontend'},
    { name: 'Rock Paper Scissor', link: 'https://repatikosam.github.io/rock-paper-scissor'},
    { name: 'Color Color', link: 'https://repatikosam.github.io/random-colors'}
];
projects.forEach((project)=>{
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
                <a href="${project.link}">
                        <img src="folder.png" alt="Folder Image">
                        <h3>${project.name}</h3>
                </a>
            `;
    container.append(projectDiv);
});