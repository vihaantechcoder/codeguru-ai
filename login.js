// Login System for CodeGuru AI

class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.init();
    }

    init() {
        // Check if user is already logged in
        const savedUser = localStorage.getItem('codeguru_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.isLoggedIn = true;
            this.showMainApp();
        } else {
            this.showLoginScreen();
        }

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Login button
        const loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.handleLogin());
        }

        // Logout button
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.handleLogout());
        }

        // Enter key in login form
        const loginInputs = ['login-username', 'login-name'];
        loginInputs.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.handleLogin();
                    }
                });
            }
        });
    }

    handleLogin() {
        const username = document.getElementById('login-username').value.trim();
        const name = document.getElementById('login-name').value.trim();

        if (!username || !name) {
            this.showError('Please enter both username and name');
            return;
        }

        // Validate inputs
        if (username.length < 3) {
            this.showError('Username must be at least 3 characters long');
            return;
        }

        if (name.length < 2) {
            this.showError('Please enter a valid name');
            return;
        }

        // Create user object
        this.currentUser = {
            username: username.toLowerCase(),
            name: name,
            joinDate: new Date().toISOString(),
            progress: {
                html: 0,
                css: 0,
                javascript: 0,
                python: 0
            },
            completedLessons: 0,
            lastActive: new Date().toISOString()
        };

        // Save to localStorage
        localStorage.setItem('codeguru_user', JSON.stringify(this.currentUser));
        
        // Show welcome animation
        this.showWelcomeAnimation();
        
        // Show main app after animation
        setTimeout(() => {
            this.isLoggedIn = true;
            this.showMainApp();
            this.updateUserUI();
        }, 2000);
    }

    handleLogout() {
        if (confirm('Are you sure you want to logout? Your progress will be saved.')) {
            this.isLoggedIn = false;
            this.currentUser = null;
            localStorage.removeItem('codeguru_user');
            this.showLoginScreen();
        }
    }

    showError(message) {
        // Remove any existing error
        const existingError = document.querySelector('.auth-error');
        if (existingError) {
            existingError.remove();
        }

        // Create error element
        const errorDiv = document.createElement('div');
        errorDiv.className = 'auth-error';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;
        
        // Style the error
        errorDiv.style.cssText = `
            background: rgba(239, 68, 68, 0.2);
            border: 1px solid rgba(239, 68, 68, 0.5);
            color: #fecaca;
            padding: 12px 15px;
            border-radius: 8px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: fadeIn 0.3s ease;
        `;

        // Insert error
        const authForm = document.querySelector('.auth-form');
        if (authForm) {
            const submitBtn = document.getElementById('login-btn');
            authForm.insertBefore(errorDiv, submitBtn);
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }

    showWelcomeAnimation() {
        const loginScreen = document.getElementById('login-screen');
        if (loginScreen) {
            loginScreen.innerHTML = `
                <div class="welcome-animation">
                    <div class="welcome-content">
                        <i class="fas fa-check-circle"></i>
                        <h2>Welcome, ${this.currentUser.name}! 👋</h2>
                        <p>Your coding journey begins now...</p>
                        <div class="loading-dots">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                    </div>
                </div>
            `;

            // Add styles for animation
            const style = document.createElement('style');
            style.textContent = `
                .welcome-animation {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    animation: fadeIn 0.5s ease;
                }
                
                .welcome-content {
                    text-align: center;
                    max-width: 400px;
                }
                
                .welcome-content i {
                    font-size: 64px;
                    color: #10b981;
                    margin-bottom: 20px;
                    animation: bounce 1s ease infinite;
                }
                
                .welcome-content h2 {
                    font-size: 28px;
                    margin-bottom: 10px;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .welcome-content p {
                    color: #94a3b8;
                    font-size: 18px;
                    margin-bottom: 30px;
                }
                
                .loading-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 30px;
                }
                
                .dot {
                    width: 12px;
                    height: 12px;
                    background: #3b82f6;
                    border-radius: 50%;
                    animation: pulseDots 1.4s ease-in-out infinite;
                }
                
                .dot:nth-child(2) {
                    animation-delay: 0.2s;
                }
                
                .dot:nth-child(3) {
                    animation-delay: 0.4s;
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes pulseDots {
                    0%, 100% { opacity: 0.4; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    showLoginScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const loginScreen = document.getElementById('login-screen');
        const mainApp = document.getElementById('main-app');

        if (loadingScreen) loadingScreen.style.display = 'none';
        if (loginScreen) loginScreen.style.display = 'flex';
        if (mainApp) mainApp.style.display = 'none';
    }

    showMainApp() {
        const loadingScreen = document.getElementById('loading-screen');
        const loginScreen = document.getElementById('login-screen');
        const mainApp = document.getElementById('main-app');

        if (loadingScreen) loadingScreen.style.display = 'none';
        if (loginScreen) loginScreen.style.display = 'none';
        if (mainApp) mainApp.style.display = 'flex';
    }

    updateUserUI() {
        if (!this.currentUser) return;

        const nameElement = document.getElementById('user-display-name');
        const usernameElement = document.getElementById('user-username');

        if (nameElement) {
            nameElement.textContent = this.currentUser.name;
        }

        if (usernameElement) {
            usernameElement.textContent = `@${this.currentUser.username}`;
        }

        // Update certificate name
        const certificateName = document.getElementById('certificate-name');
        const certificateUsername = document.getElementById('certificate-username');
        
        if (certificateName) {
            certificateName.textContent = this.currentUser.name;
        }
        
        if (certificateUsername) {
            certificateUsername.textContent = `@${this.currentUser.username}`;
        }
    }

    saveProgress(progressData) {
        if (!this.currentUser) return;

        this.currentUser.progress = progressData.progress;
        this.currentUser.completedLessons = progressData.completedLessons;
        this.currentUser.lastActive = new Date().toISOString();

        localStorage.setItem('codeguru_user', JSON.stringify(this.currentUser));
    }

    loadProgress() {
        if (!this.currentUser) return null;

        return {
            progress: this.currentUser.progress || {
                html: 0,
                css: 0,
                javascript: 0,
                python: 0
            },
            completedLessons: this.currentUser.completedLessons || 0
        };
    }

    getUserName() {
        return this.currentUser ? this.currentUser.name : 'Guest';
    }

    getUsername() {
        return this.currentUser ? this.currentUser.username : 'guest';
    }
}

// Initialize auth system
const auth = new AuthSystem();

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { auth };
}