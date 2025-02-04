const originalContent = document.getElementById('content').innerHTML;

function highlightText() {
    let input = document.getElementById('search').value;
    let contentDiv = document.getElementById('content');
    if (input.trim() === "") {
        contentDiv.innerHTML = originalContent;
        return;
    }
    let regex = new RegExp(`(${input})`, 'gi');
    contentDiv.innerHTML = originalContent.replace(regex, match => `<span class='highlight'>${match}</span>`);
}

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});