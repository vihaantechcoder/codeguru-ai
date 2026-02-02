// CodeGuru AI - Main JavaScript File
// Note: This integrates with auth system from login.js

// Global Variables
let currentCourse = 'html';
let currentLesson = 0;
let completedLessons = 0;
let userProgress = {
    html: 0,
    css: 0,
    javascript: 0,
    python: 0
};

// DOM Elements
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');
const lessonsCompleted = document.getElementById('lessons-completed');
const currentCourseElement = document.getElementById('current-course');
const currentLessonElement = document.getElementById('current-lesson');
const courseItems = document.querySelectorAll('.course-item');
const quizModal = document.getElementById('quiz-modal');
const closeQuizBtn = document.getElementById('close-quiz');
const submitQuizBtn = document.getElementById('submit-quiz');
const certificateModal = document.getElementById('certificate-modal');
const closeCertificateBtn = document.getElementById('close-certificate');
const printCertificateBtn = document.getElementById('print-certificate');
const downloadCertificateBtn = document.getElementById('download-certificate');
const shareCertificateBtn = document.getElementById('share-certificate');
const quickBtns = document.querySelectorAll('.quick-btn');
const helpBtn = document.getElementById('help-btn');
const restartBtn = document.getElementById('restart-btn');
const viewCertificateBtn = document.getElementById('view-certificate-btn');

// Progress elements
const htmlProgress = document.getElementById('html-progress');
const cssProgress = document.getElementById('css-progress');
const jsProgress = document.getElementById('js-progress');
const pythonProgress = document.getElementById('python-progress');

// Course Data (loaded from separate files)
const courses = {
    html: htmlCourses,
    css: cssCourses,
    javascript: jsCourses,
    python: pythonCourses
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen
    showLoadingScreen();
    
    // Load user progress from auth system
    const savedProgress = auth.loadProgress();
    if (savedProgress) {
        userProgress = savedProgress.progress;
        completedLessons = savedProgress.completedLessons;
    }
    
    // Hide loading after 2 seconds
    setTimeout(() => {
        hideLoadingScreen();
        loadCourse('html', 0);
        updateProgress();
        setupEventListeners();
        updateCourseProgressUI();
    }, 2000);
});

// Loading Screen Functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Send button click
    sendBtn.addEventListener('click', handleUserInput);
    
    // Enter key in input
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Course selection
    courseItems.forEach(item => {
        item.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            selectCourse(course);
        });
    });
    
    // Quiz modal
    closeQuizBtn.addEventListener('click', () => {
        quizModal.classList.remove('active');
    });
    
    submitQuizBtn.addEventListener('click', checkQuizAnswer);
    
    // Certificate modal
    closeCertificateBtn.addEventListener('click', () => {
        certificateModal.classList.remove('active');
    });
    
    printCertificateBtn.addEventListener('click', printCertificate);
    downloadCertificateBtn.addEventListener('click', downloadCertificate);
    shareCertificateBtn.addEventListener('click', shareCertificate);
    viewCertificateBtn.addEventListener('click', viewCertificate);
    
    // Quick command buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const command = this.getAttribute('data-command');
            handleQuickCommand(command);
        });
    });
    
    // Help and restart buttons
    if (helpBtn) {
        helpBtn.addEventListener('click', showHelp);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartCourse);
    }
}

// Handle User Input
function handleUserInput() {
    const message = userInput.value.trim();
    
    if (message) {
        // Add user message to chat
        addMessageToChat(message, 'user');
        
        // Process command
        processCommand(message.toUpperCase());
        
        // Clear input
        userInput.value = '';
        userInput.focus();
    }
}

// Handle Quick Commands
function handleQuickCommand(command) {
    addMessageToChat(command, 'user');
    processCommand(command);
    userInput.focus();
}

// Process User Commands
function processCommand(command) {
    switch(command) {
        case 'NEXT':
            nextLesson();
            break;
        case 'ASK':
            askForHelp();
            break;
        case 'REPEAT':
            repeatLesson();
            break;
        case 'EXAMPLE':
            showExample();
            break;
        case 'HELP':
            showHelp();
            break;
        case 'CERTIFICATE':
            if (completedLessons >= 100) {
                viewCertificate();
            } else {
                addMessageToChat(`You need to complete all 100 lessons to get your certificate! You've completed ${completedLessons}/100 lessons so far. Keep going! 💪`, 'ai');
            }
            break;
        default:
            handleCustomQuestion(command);
    }
}

// Add Message to Chat
function addMessageToChat(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar';
    
    const messageContentDiv = document.createElement('div');
    messageContentDiv.className = 'message-content';
    
    const messageHeaderDiv = document.createElement('div');
    messageHeaderDiv.className = 'message-header';
    
    const messageTextDiv = document.createElement('div');
    messageTextDiv.className = 'message-text';
    
    // Set avatar icon
    if (sender === 'ai') {
        avatarDiv.innerHTML = '<i class="fas fa-robot"></i>';
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageHeaderDiv.innerHTML = `<strong>CodeGuru AI</strong> <span class="time">${time}</span>`;
    } else {
        avatarDiv.innerHTML = '<i class="fas fa-user-graduate"></i>';
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageHeaderDiv.innerHTML = `<strong>${auth.getUserName()}</strong> <span class="time">${time}</span>`;
    }
    
    // Set message text
    messageTextDiv.innerHTML = formatMessageText(text);
    
    // Assemble message
    messageContentDiv.appendChild(messageHeaderDiv);
    messageContentDiv.appendChild(messageTextDiv);
    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(messageContentDiv);
    
    // Add to chat
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Format Message Text
function formatMessageText(text) {
    // Convert line breaks to <br>
    text = text.replace(/\n/g, '<br>');
    
    // Highlight commands
    text = text.replace(/NEXT|ASK|REPEAT|EXAMPLE|HELP|CERTIFICATE/gi, '<strong>$&</strong>');
    
    return text;
}

// Load Course
function loadCourse(course, lessonIndex) {
    currentCourse = course;
    currentLesson = lessonIndex;
    
    const courseData = courses[course];
    const lesson = courseData.lessons[lessonIndex];
    
    // Update UI
    currentCourseElement.textContent = courseData.title;
    currentLessonElement.textContent = `Lesson ${lessonIndex + 1}: ${lesson.title}`;
    
    // Add lesson to chat
    addLessonToChat(lesson);
    
    // Update course item
    updateCourseItem(course, lessonIndex);
}

// Add Lesson to Chat
function addLessonToChat(lesson) {
    let lessonHTML = `
        <h2><i class="fas fa-book"></i> ${lesson.title}</h2>
        <div class="lesson-content">
            <div class="big-notes">
                ${lesson.notes}
                
                <div class="practice-section">
                    <h3><i class="fas fa-pencil-alt"></i> Practice Questions:</h3>
                    <ol>
                        ${lesson.practiceQuestions.map(q => `<li>${q}</li>`).join('')}
                    </ol>
                    
                    <h3><i class="fas fa-tasks"></i> Mini Task:</h3>
                    <p>${lesson.miniTask}</p>
                </div>
                
                <div class="lesson-footer">
                    <p class="next-prompt">Type <strong>NEXT</strong> to continue to next lesson or <strong>ASK</strong> if you're confused about anything!</p>
                </div>
            </div>
        </div>
    `;
    
    addMessageToChat(lessonHTML, 'ai');
}

// Next Lesson
function nextLesson() {
    const courseData = courses[currentCourse];
    
    // Check if there's a quiz for current lesson
    if (courseData.lessons[currentLesson].quiz) {
        showQuiz();
        return;
    }
    
    // Move to next lesson
    if (currentLesson < courseData.lessons.length - 1) {
        currentLesson++;
        loadCourse(currentCourse, currentLesson);
        
        // Mark lesson as completed
        if (userProgress[currentCourse] < currentLesson) {
            userProgress[currentCourse] = currentLesson;
            completedLessons++;
            updateProgress();
            saveUserProgress();
            checkMilestones();
            updateCourseProgressUI();
        }
    } else {
        // Course completed, move to next course
        completeCourse();
    }
}

// Ask for Help
function askForHelp() {
    const courseData = courses[currentCourse];
    const lesson = courseData.lessons[currentLesson];
    
    const helpMessage = `
        <h3><i class="fas fa-hands-helping"></i> Help for: ${lesson.title}</h3>
        <p>Koi baat nahi, sabko confusion hoti hai! 😊 Let me explain again in a different way:</p>
        <div class="help-content">
            <p><strong><i class="fas fa-key"></i> Key Concept:</strong> ${lesson.simpleExplanation || "Let me simplify this for you..."}</p>
            <p><strong><i class="fas fa-globe"></i> Real Example:</strong> Jaise Facebook mein jab tum like button click karte ho...</p>
            <p><strong><i class="fas fa-lightbulb"></i> Pro Tip:</strong> ${getRandomTip()}</p>
        </div>
        <p>Agar abhi bhi confusion hai toh specific question pucho!</p>
    `;
    
    addMessageToChat(helpMessage, 'ai');
}

// Get Random Tip
function getRandomTip() {
    const tips = [
        "Always test your code in small pieces before combining everything",
        "Use console.log() to debug JavaScript code",
        "Save your work frequently!",
        "Don't memorize code, understand the logic",
        "Practice daily, even if it's just for 30 minutes",
        "Google is your best friend when stuck",
        "Read error messages carefully, they tell you what's wrong",
        "Break big problems into smaller ones"
    ];
    return tips[Math.floor(Math.random() * tips.length)];
}

// Repeat Lesson
function repeatLesson() {
    const courseData = courses[currentCourse];
    const lesson = courseData.lessons[currentLesson];
    
    const repeatMessage = `
        <h3><i class="fas fa-redo"></i> Repeating Lesson: ${lesson.title}</h3>
        <p>Sure! Let's go through this again...</p>
        <div class="quick-review">
            <p><strong>Main Points:</strong></p>
            <ul>
                <li>HTML creates structure</li>
                <li>CSS adds styling</li>
                <li>JavaScript adds interactivity</li>
                <li>All three work together</li>
            </ul>
        </div>
        <p>Ready to continue? Type <strong>NEXT</strong> when you're ready!</p>
    `;
    
    addMessageToChat(repeatMessage, 'ai');
}

// Show Example
function showExample() {
    const courseData = courses[currentCourse];
    const lesson = courseData.lessons[currentLesson];
    
    const exampleMessage = `
        <h3><i class="fas fa-code"></i> Example Time!</h3>
        <p>Chalo ek real-world example dekhte hain:</p>
        <pre><code>${lesson.exampleCode || "// Example code will appear here"}</code></pre>
        <div class="example-explanation">
            <p><strong>Yeh code kaise kaam karta hai:</strong></p>
            <ol>
                <li>Pehla step - Structure banata hai</li>
                <li>Dusra step - Design add karta hai</li>
                <li>Teesra step - Functionality add karta hai</li>
            </ol>
        </div>
        <p>Try karo aur dekho kya hota hai! 💻</p>
    `;
    
    addMessageToChat(exampleMessage, 'ai');
}

// Show Help
function showHelp() {
    const helpMessage = `
        <h3><i class="fas fa-question-circle"></i> CodeGuru AI Help</h3>
        <div class="help-section">
            <p><strong>Available Commands:</strong></p>
            <ul>
                <li><strong>NEXT</strong> - Go to next lesson</li>
                <li><strong>ASK</strong> - Get help with current lesson</li>
                <li><strong>REPEAT</strong> - Repeat current lesson</li>
                <li><strong>EXAMPLE</strong> - See practical example</li>
                <li><strong>CERTIFICATE</strong> - View your certificate (after 100 lessons)</li>
            </ul>
            
            <p><strong>Quick Tips:</strong></p>
            <ul>
                <li>Complete lessons in order</li>
                <li>Practice the mini tasks</li>
                <li>Don't skip quizzes</li>
                <li>Your progress is saved automatically</li>
            </ul>
        </div>
        <p>Need more help? Just ask me anything! 😊</p>
    `;
    
    addMessageToChat(helpMessage, 'ai');
}

// Restart Course
function restartCourse() {
    if (confirm('Are you sure you want to restart this course? Your progress will be reset for this course only.')) {
        userProgress[currentCourse] = 0;
        currentLesson = 0;
        loadCourse(currentCourse, 0);
        updateProgress();
        saveUserProgress();
        updateCourseProgressUI();
        
        addMessageToChat(`Course restarted! Let's begin from Lesson 1. 🚀`, 'ai');
    }
}

// Handle Custom Question
function handleCustomQuestion(question) {
    const responses = [
        "Acha sawal hai! Yeh concept thoda advanced hai, pehle basics clear karte hain.",
        "Iska jawab dene ke liye humein pichle lessons revise karna padega.",
        "Mujhe lagta hai tum thoda confuse ho. Chalo main ek bar phir se explain karta hoon...",
        "Real life example se samajhte hain...",
        "Tension mat lo, yeh common confusion hai. Aise samjho..."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const responseMessage = `
        <h3>🤔 Tumne pucha: "${question}"</h3>
        <p>${randomResponse}</p>
        <p>Kya tum specific example ke through samajhna chahte ho?</p>
        <p>Try typing: <strong>EXAMPLE</strong> for a practical example</p>
    `;
    
    // Show response after a short delay
    setTimeout(() => {
        addMessageToChat(responseMessage, 'ai');
    }, 1000);
}

// Show Quiz
function showQuiz() {
    const courseData = courses[currentCourse];
    const lesson = courseData.lessons[currentLesson];
    const quiz = lesson.quiz;
    
    if (!quiz) return;
    
    // Set quiz question
    document.getElementById('quiz-question').innerHTML = quiz.question;
    
    // Set quiz options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    quiz.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.innerHTML = `
            <div class="option-number">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        optionDiv.setAttribute('data-index', index);
        
        optionDiv.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected');
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Clear feedback
    const feedbackDiv = document.getElementById('quiz-feedback');
    feedbackDiv.innerHTML = '';
    feedbackDiv.style.display = 'none';
    feedbackDiv.className = '';
    
    // Show modal
    quizModal.classList.add('active');
}

// Check Quiz Answer
function checkQuizAnswer() {
    const selectedOption = document.querySelector('.quiz-option.selected');
    const feedbackDiv = document.getElementById('quiz-feedback');
    
    if (!selectedOption) {
        feedbackDiv.innerHTML = 'Pehle ek option select karo!';
        feedbackDiv.className = 'feedback-wrong';
        feedbackDiv.style.display = 'block';
        return;
    }
    
    const selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
    const courseData = courses[currentCourse];
    const lesson = courseData.lessons[currentLesson];
    const quiz = lesson.quiz;
    
    if (selectedIndex === quiz.correctAnswer) {
        // Correct answer
        feedbackDiv.innerHTML = `
            <h4><i class="fas fa-check-circle"></i> Shabaash! Correct Answer!</h4>
            <p>${quiz.explanation}</p>
            <p>Tum bilkul sahi ho! 🎉 Chalo ab agle lesson par chalte hain.</p>
        `;
        feedbackDiv.className = 'feedback-correct';
        
        // Mark lesson as completed
        if (userProgress[currentCourse] < currentLesson + 1) {
            userProgress[currentCourse] = currentLesson + 1;
            completedLessons++;
            updateProgress();
            saveUserProgress();
            checkMilestones();
            updateCourseProgressUI();
        }
        
        // Auto-close after delay and go to next lesson
        setTimeout(() => {
            quizModal.classList.remove('active');
            setTimeout(() => {
                if (currentLesson < courseData.lessons.length - 1) {
                    currentLesson++;
                    loadCourse(currentCourse, currentLesson);
                } else {
                    completeCourse();
                }
            }, 500);
        }, 3000);
    } else {
        // Wrong answer
        feedbackDiv.innerHTML = `
            <h4><i class="fas fa-times-circle"></i> Thoda socho...</h4>
            <p>Yeh galat jawab hai. Chalo main explain karta hoon:</p>
            <p>${quiz.explanation}</p>
            <p>Dobara try karo, koi baat nahi! 💪</p>
        `;
        feedbackDiv.className = 'feedback-wrong';
    }
    
    feedbackDiv.style.display = 'block';
}

// Complete Course
function completeCourse() {
    const courseNames = {
        html: 'HTML Basics',
        css: 'CSS Styling',
        javascript: 'JavaScript',
        python: 'Python'
    };
    
    const nextCourse = getNextCourse();
    
    if (nextCourse) {
        const completionMessage = `
            <div class="course-completion">
                <h2><i class="fas fa-trophy"></i> Congratulations! 🎊</h2>
                <p>Tumne successfully <strong>${courseNames[currentCourse]}</strong> course complete kar liya!</p>
                <div class="confetti">🎉🎊</div>
                <p>${getMotivationMessage()}</p>
                <p>Chalo ab <strong>${courseNames[nextCourse]}</strong> course start karte hain!</p>
                <p class="next-prompt">Type <strong>NEXT</strong> to begin the next course.</p>
            </div>
        `;
        
        addMessageToChat(completionMessage, 'ai');
        
        // Switch to next course
        setTimeout(() => {
            selectCourse(nextCourse);
        }, 2000);
    } else {
        // All courses completed
        allCoursesCompleted();
    }
}

// Get Next Course
function getNextCourse() {
    const courseOrder = ['html', 'css', 'javascript', 'python'];
    const currentIndex = courseOrder.indexOf(currentCourse);
    
    if (currentIndex < courseOrder.length - 1) {
        return courseOrder[currentIndex + 1];
    }
    
    return null;
}

// All Courses Completed
function allCoursesCompleted() {
    const completionMessage = `
        <div class="all-courses-completion">
            <h2>🏆 BOHOT BOHOT BADHAI HO! 🏆</h2>
            <div class="celebration">
                <i class="fas fa-award"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-medal"></i>
            </div>
            <p>Tumne saare 100 lessons successfully complete kar liye!</p>
            <p>Ab tum officially <strong>Full Stack Web Developer</strong> ban chuke ho! 💪</p>
            <p>Yeh ek badi achievement hai aur tum iske layak ho!</p>
            <p>Tera certificate ready hai...</p>
            <p class="next-prompt">Type <strong>CERTIFICATE</strong> to view your certificate or click the "View Certificate" button in the sidebar!</p>
        </div>
    `;
    
    addMessageToChat(completionMessage, 'ai');
    
    // Enable certificate button
    viewCertificateBtn.disabled = false;
    viewCertificateBtn.innerHTML = '<i class="fas fa-certificate"></i> View Certificate';
    
    // Show certificate after 3 seconds
    setTimeout(() => {
        viewCertificate();
    }, 3000);
}

// View Certificate
function viewCertificate() {
    if (completedLessons < 100) {
        addMessageToChat(`You need to complete all 100 lessons to get your certificate! You've completed ${completedLessons}/100 lessons so far. Keep going! 💪`, 'ai');
        return;
    }
    
    // Set certificate details
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    document.getElementById('certificate-date').textContent = dateStr;
    
    // Generate certificate ID
    const certId = 'CG' + Date.now().toString().slice(-6);
    document.getElementById('certificate-id').textContent = certId;
    document.getElementById('verify-id').textContent = certId;
    
    // Show modal
    certificateModal.classList.add('active');
}

// Print Certificate
function printCertificate() {
    const printContent = document.getElementById('certificate-content').outerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Certificate - ${auth.getUserName()}</title>
            <style>
                body {
                    margin: 0;
                    padding: 20px;
                    background: white;
                    font-family: Arial, sans-serif;
                }
                @media print {
                    @page {
                        size: A4 landscape;
                        margin: 0;
                    }
                    body {
                        padding: 0;
                    }
                }
            </style>
        </head>
        <body>${printContent}</body>
        </html>
    `;
    
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
}

// Download Certificate as PNG
function downloadCertificate() {
    // In a real implementation, you would use html2canvas library
    // For now, we'll show a message
    alert('In a real implementation, this would download your certificate as PNG. For now, please use the Print feature.');
    
    // Real implementation would be:
    // html2canvas(document.getElementById('certificate-content')).then(canvas => {
    //     const link = document.createElement('a');
    //     link.download = `certificate-${auth.getUsername()}.png`;
    //     link.href = canvas.toDataURL();
    //     link.click();
    // });
}

// Share Certificate
function shareCertificate() {
    const shareText = `I just completed all 100 coding lessons on CodeGuru AI! 🎓 Check out my certificate!`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: 'My CodeGuru AI Certificate',
            text: shareText,
            url: shareUrl
        });
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`).then(() => {
            alert('Certificate link copied to clipboard! Share it with your friends!');
        });
    }
}

// Select Course
function selectCourse(course) {
    // Update active course item
    courseItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-course') === course) {
            item.classList.add('active');
        }
    });
    
    // Load first lesson of selected course
    currentLesson = 0;
    loadCourse(course, 0);
}

// Update Course Item
function updateCourseItem(course, lessonIndex) {
    courseItems.forEach(item => {
        if (item.getAttribute('data-course') === course) {
            const lessonCount = item.querySelector('.lesson-count');
            lessonCount.textContent = `${userProgress[course]}/25`;
        }
    });
}

// Update Course Progress UI
function updateCourseProgressUI() {
    if (htmlProgress) htmlProgress.textContent = `${userProgress.html}/25`;
    if (cssProgress) cssProgress.textContent = `${userProgress.css}/25`;
    if (jsProgress) jsProgress.textContent = `${userProgress.javascript}/25`;
    if (pythonProgress) pythonProgress.textContent = `${userProgress.python}/25`;
}

// Update Progress
function updateProgress() {
    const totalLessons = 100;
    const progress = Math.round((completedLessons / totalLessons) * 100);
    
    // Update progress bar
    progressFill.style.width = `${progress}%`;
    progressPercent.textContent = `${progress}%`;
    lessonsCompleted.textContent = `${completedLessons}/${totalLessons} lessons completed`;
    
    // Update milestones
    updateMilestones();
    
    // Update certificate button
    if (completedLessons >= 100) {
        viewCertificateBtn.disabled = false;
        viewCertificateBtn.innerHTML = '<i class="fas fa-certificate"></i> View Certificate';
    }
}

// Update Milestones
function updateMilestones() {
    const milestones = document.querySelectorAll('.milestone');
    
    milestones.forEach(milestone => {
        const milestoneValue = parseInt(milestone.getAttribute('data-milestone'));
        
        if (completedLessons >= milestoneValue) {
            milestone.classList.add('achieved');
            const icon = milestone.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-check-circle';
                icon.style.color = '#10b981';
            }
        }
    });
}

// Check Milestones
function checkMilestones() {
    const milestoneMessages = {
        10: {
            title: "🎯 First Milestone!",
            message: "Wah! Tumne 10 lessons complete kar liye! Ab tum coding ke basics samajhne lag gaye ho!"
        },
        25: {
            title: "🏅 Quarter Journey!",
            message: "Amazing! 25 lessons complete! Ab tum officially beginner se aage badh gaye ho! 💪"
        },
        50: {
            title: "🚀 Halfway There!",
            message: "50 lessons complete! Tum ab experienced learner ho! Just 50 more to go!"
        },
        75: {
            title: "💪 Almost There!",
            message: "75 lessons! Thoda aur mehnat aur certificate tumhara hai!"
        },
        100: {
            title: "👑 CHAMPION!",
            message: "100 lessons complete! You're now a certified developer! 🎉"
        }
    };
    
    if (milestoneMessages[completedLessons]) {
        const milestone = milestoneMessages[completedLessons];
        const milestoneMessage = `
            <div class="milestone-message">
                <h3>${milestone.title}</h3>
                <p>${milestone.message}</p>
                <p>Keep going! Tera progress dekh kar main bahut khush hoon! 😊</p>
            </div>
        `;
        
        setTimeout(() => {
            addMessageToChat(milestoneMessage, 'ai');
        }, 1000);
    }
}

// Save User Progress
function saveUserProgress() {
    auth.saveProgress({
        progress: userProgress,
        completedLessons: completedLessons
    });
}

// Get Motivation Message
function getMotivationMessage() {
    const messages = [
        "Tumhari mehnat dikh rahi hai! 💪",
        "Yehi commitment tumhe successful banayegi!",
        "Main tumpe garv mehsoos kar raha hoon!",
        "Coding seekhna ek marathon hai, sprint nahi. Tum accha kar rahe ho!",
        "Har lesson ke saath tum strong developer ban rahe ho!",
        "Tumhara consistency inspirational hai!",
        "Aage badhte raho, success tumhare kadam chumegi!",
        "Yeh dedication tumhe professional banayegi!"
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
}