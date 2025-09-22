const githubDetails = document.querySelector('#github-details');
const userText = document.querySelector('.user-text');
const searchBtn = document.querySelector('.search-btn');
const clearBtn = document.querySelector('#clear-btn');
const loading = document.querySelector('#loading');
const error = document.querySelector('#error');
const repositories = document.querySelector('#repositories');
const recentSearches = document.querySelector('#recent-searches');

let currentUser = null;
let comparedUsers = [];

searchBtn.addEventListener('click', handleSearch);
clearBtn.addEventListener('click', clearResults);
userText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

loadRecentSearches();

function handleSearch() {
    const username = userText.value.trim();
    if (username) {
        getUserDetails(username);
    }
}

async function getUserDetails(username) {
    try {
        showLoading(true);
        hideError();
        
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);
        
        if (!userRes.ok) throw new Error('User not found');
        
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        
        displayUser(userData);
        displayRepos(reposData);
        
        // Show user creation date
        const joinDate = new Date(userData.created_at).toLocaleDateString();
        githubDetails.querySelector('.user-info').innerHTML += `<p><small>Joined: ${joinDate}</small></p>`;
        
    } catch (err) {
        showError('User not found. Please check the username.');
    } finally {
        showLoading(false);
    }
}

function displayUser(data) {
    currentUser = data;
    saveRecentSearch(data.login);
    
    githubDetails.innerHTML = `
        <div class="user-card">
            <img src="${data.avatar_url}" alt="${data.login}" class="user-avatar">
            <div class="user-info">
                <h2>${data.name || data.login}</h2>
                <p>@${data.login}</p>
                ${data.bio ? `<p>${data.bio}</p>` : ''}
                <div class="user-stats">
                    <div class="stat">
                        <span class="stat-number">${data.public_repos}</span>
                        <span>Repos</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${data.followers}</span>
                        <span>Followers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${data.following}</span>
                        <span>Following</span>
                    </div>
                </div>
                <a href="${data.html_url}" target="_blank">View Profile</a>
                <button class="compare-btn" onclick="addToComparison()">Add to Compare</button>
            </div>
        </div>
    `;
    
    updateComparison();
}

function displayRepos(repos) {
    if (repos.length === 0) return;
    
    const repoCards = repos.map(repo => `
        <div class="repo-card">
            <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
            ${repo.description ? `<div class="repo-desc">${repo.description}</div>` : ''}
            <div class="repo-stats">
                ${repo.language ? `<span>🔵 ${repo.language}</span>` : ''}
                <span>⭐ ${repo.stargazers_count}</span>
                <span>🍴 ${repo.forks_count}</span>
            </div>
        </div>
    `).join('');
    
    repositories.innerHTML = `
        <h3>Recent Repositories</h3>
        <div class="repos-grid">${repoCards}</div>
    `;
}

function showLoading(show) {
    loading.style.display = show ? 'block' : 'none';
}

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
}

function hideError() {
    error.style.display = 'none';
}

function clearResults() {
    githubDetails.innerHTML = '';
    repositories.innerHTML = '';
    userText.value = '';
    hideError();
    currentUser = null;
    comparedUsers = [];
    updateComparison();
}

function saveRecentSearch(username) {
    let recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    recent = recent.filter(u => u !== username);
    recent.unshift(username);
    recent = recent.slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(recent));
    loadRecentSearches();
}

function loadRecentSearches() {
    const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    if (recent.length > 0) {
        recentSearches.innerHTML = `
            <div class="recent-title">Recent searches:</div>
            ${recent.map(username => 
                `<span class="recent-item" onclick="searchUser('${username}')">${username}</span>`
            ).join('')}
        `;
    }
}

function searchUser(username) {
    userText.value = username;
    getUserDetails(username);
}

function addToComparison() {
    if (currentUser && !comparedUsers.find(u => u.login === currentUser.login)) {
        comparedUsers.push(currentUser);
        updateComparison();
    }
}

function updateComparison() {
    if (comparedUsers.length >= 2) {
        const comparison = document.createElement('div');
        comparison.className = 'comparison';
        comparison.innerHTML = `
            <h3>User Comparison</h3>
            <div class="vs-divider">VS</div>
            ${comparedUsers.slice(0, 2).map(user => `
                <div class="user-card">
                    <img src="${user.avatar_url}" alt="${user.login}" class="user-avatar" style="width: 60px; height: 60px;">
                    <div class="user-info">
                        <h3>${user.name || user.login}</h3>
                        <div class="user-stats">
                            <div class="stat">
                                <span class="stat-number">${user.public_repos}</span>
                                <span>Repos</span>
                            </div>
                            <div class="stat">
                                <span class="stat-number">${user.followers}</span>
                                <span>Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
            <button onclick="clearComparison()" style="grid-column: 1 / -1; margin-top: 10px;">Clear Comparison</button>
        `;
        
        if (!document.querySelector('.comparison')) {
            document.querySelector('.container').appendChild(comparison);
        } else {
            document.querySelector('.comparison').replaceWith(comparison);
        }
    }
}

function clearComparison() {
    comparedUsers = [];
    const comparison = document.querySelector('.comparison');
    if (comparison) comparison.remove();
}