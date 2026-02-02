const cssCourses = {
    title: "CSS Styling",
    totalLessons: 25,
    lessons: [
        {
            title: "What is CSS?",
            notes: `<p><strong>CSS ka full form hai:</strong> Cascading Style Sheets</p>
                <p>Socho agar HTML website ka skeleton hai, toh CSS uska skin, clothes aur makeup hai! 👗💄 CSS website ko beautiful banata hai.</p>
                
                <p><strong>Real-life example:</strong> Jab tum Instagram open karte ho, woh beautiful colors, layouts, animations - sab CSS se bana hai. Same HTML structure ko alag-alag CSS se alag design mil sakta hai.</p>
                
                <p><strong>Simple analogy:</strong> Ek hi building (HTML) ko different paint (CSS) se alag look diya ja sakta hai.</p>
                
                <p><strong>CSS ka basic syntax:</strong></p>
                <pre><code>selector {
    property: value;
    property: value;
}</code></pre>
                
                <p><strong>Example:</strong></p>
                <pre><code>h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}</code></pre>
                
                <p><strong>Line-by-line explanation:</strong></p>
                <ol>
                    <li><code>h1</code> - Yeh selector hai, jo HTML ke h1 tag ko target karta hai</li>
                    <li><code>color: blue;</code> - Text color blue karta hai</li>
                    <li><code>font-size: 32px;</code> - Text size 32 pixels karta hai</li>
                    <li><code>text-align: center;</code> - Text ko center mein align karta hai</li>
                </ol>
                
                <p><strong>Common beginner mistakes:</strong></p>
                <ul>
                    <li>Semicolon (;) bhool jana</li>
                    <li>Colon (:) ki jagah equal (=) sign use karna</li>
                    <li>CSS file ko HTML se link karna bhool jana</li>
                </ul>`,
            practiceQuestions: [
                "CSS ka full form kya hai?",
                "CSS mein selector kya karta hai?"
            ],
            miniTask: "Apni HTML file mein CSS add karo. Ek style.css file banao aur usse HTML se link karo. Fir kuch elements ko style karo!",
            quiz: {
                question: "CSS ka main purpose kya hai?",
                options: [
                    "Website ka structure banana",
                    "Website ko style aur design dena",
                    "Website mein logic add karna"
                ],
                correctAnswer: 1,
                explanation: "CSS ka main kaam website ko visually attractive banana hai. Colors, layouts, fonts, spacing - yeh sab CSS control karta hai."
            },
            simpleExplanation: "CSS website ko sundar banata hai - jaise kapde insaan ko sundar banate hain.",
            exampleCode: `/* This is CSS code */
body {
    background-color: lightblue;
    font-family: Arial;
}

h1 {
    color: darkblue;
    text-align: center;
}

p {
    color: gray;
    font-size: 18px;
}`
        },
        // Add 9 more CSS lessons here...
        {
            title: "CSS Selectors - Element, Class, ID",
            notes: `<p><strong>CSS Selectors:</strong> HTML elements ko target karte hain styling ke liye</p>
                
                <p><strong>1. Element Selector:</strong> Tag name se select kare</p>
                <pre><code>p {
    color: red;
}
/* Saare paragraphs red ho jayenge */</code></pre>
                
                <p><strong>2. Class Selector:</strong> Dot (.) se start kare</p>
                <pre><code>.highlight {
    background-color: yellow;
}
&lt;p class="highlight"&gt;This is highlighted&lt;/p&gt;</code></pre>
                
                <p><strong>3. ID Selector:</strong> Hash (#) se start kare</p>
                <pre><code>#header {
    background: blue;
}
&lt;div id="header"&gt;This is header&lt;/div&gt;</code></pre>
                
                <p><strong>Class vs ID:</strong></p>
                <ul>
                    <li><strong>Class:</strong> Multiple elements ke liye use karo</li>
                    <li><strong>ID:</strong> Single unique element ke liye</li>
                </ul>
                
                <p><strong>Group Selector:</strong> Multiple elements ek saath</p>
                <pre><code>h1, h2, h3 {
    font-family: 'Arial', sans-serif;
}</code></pre>`,
            practiceQuestions: [
                "Class selector aur ID selector mein kya antar hai?",
                "Group selector kaise likhte hain?"
            ],
            miniTask: "Ek webpage mein different selectors use karke style karo",
            quiz: {
                question: "Class selector ka syntax kya hai?",
                options: [
                    "#className",
                    ".className", 
                    "className"
                ],
                correctAnswer: 1,
                explanation: "Class selector dot (.) se start hota hai, jaise: .myClass"
            }
        }
        // Continue with 8 more CSS lessons...
    ]
};