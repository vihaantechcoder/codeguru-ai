const htmlCourses = {
    title: "HTML Basics",
    totalLessons: 25,
    lessons: [
        {
            title: "What is HTML?",
            notes: `<p><strong>HTML ka full form hai:</strong> HyperText Markup Language</p>
                <p>Socho HTML kisi website ka skeleton hai 🦴. Jaise bina skeleton ke body khadi nahi reh sakti, waise hi bina HTML ke website nahi banti.</p>
                
                <p><strong>Real-life example:</strong> Jab tum Facebook open karte ho, woh jo buttons, photos, text dikhta hai - sab HTML se bana hai. HTML sirf structure deta hai, design nahi.</p>
                
                <p><strong>Simple analogy:</strong> Ghar banana socho:</p>
                <ul>
                    <li>HTML = Ghar ki walls, doors, windows (structure)</li>
                    <li>CSS = Paint, decoration, colors (design)</li>
                    <li>JavaScript = Light switches, doorbell, fan control (interactivity)</li>
                </ul>
                
                <p><strong>HTML ka basic structure:</strong></p>
                <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Meri Pehli Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;Meri pehli HTML file.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                
                <p><strong>Line-by-line explanation:</strong></p>
                <ol>
                    <li><code>&lt;!DOCTYPE html&gt;</code> - Browser ko bataata hai ki yeh HTML5 file hai</li>
                    <li><code>&lt;html&gt;</code> - Pure HTML document ka root element</li>
                    <li><code>&lt;head&gt;</code> - Website ki metadata (title, links, etc.)</li>
                    <li><code>&lt;title&gt;</code> - Browser tab pe dikhne wala title</li>
                    <li><code>&lt;body&gt;</code> - Yahi woh content hai jo user ko dikhega</li>
                    <li><code>&lt;h1&gt;</code> - Heading (sabse bada)</li>
                    <li><code>&lt;p&gt;</code> - Paragraph text</li>
                </ol>
                
                <p><strong>Common beginner mistakes:</strong></p>
                <ul>
                    <li>Tags close karna bhool jana (har open tag ka close tag hona chahiye)</li>
                    <li>Angle brackets galat direction mein likhna</li>
                    <li>File ko .txt extension se save karna (.html hona chahiye)</li>
                </ul>`,
            practiceQuestions: [
                "HTML ka full form kya hai?",
                "HTML document ka root element konsa hota hai?"
            ],
            miniTask: "Apne computer mein 'meri-pehli-website.html' naam ki file banao aur upar diye gaye code ko copy-paste karo. Fir browser mein open karo aur dekho kya dikhta hai!",
            quiz: {
                question: "HTML ka kya kaam hai?",
                options: [
                    "Website ko design karna (colors, fonts)",
                    "Website ka structure banana",
                    "Website mein interactivity add karna"
                ],
                correctAnswer: 1,
                explanation: "HTML ka main kaam website ka structure banana hai. Design ke liye CSS aur interactivity ke liye JavaScript use hota hai."
            },
            simpleExplanation: "HTML sirf structure banata hai, jaise ghar ki walls. Design aur functionality baad mein aati hai.",
            exampleCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page.</p>
    <button>Click Me</button>
</body>
</html>`
        },
        {
            title: "HTML Tags and Elements",
            notes: `<p><strong>HTML Tags:</strong> Yeh angle brackets (&lt;&gt;) mein hote hain. Har tag ka ek specific meaning hota hai.</p>
                
                <p><strong>Example tags:</strong></p>
                <ul>
                    <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings (h1 sabse bada)</li>
                    <li><code>&lt;p&gt;</code> - Paragraph</li>
                    <li><code>&lt;a&gt;</code> - Anchor (links banane ke liye)</li>
                    <li><code>&lt;img&gt;</code> - Images ke liye</li>
                    <li><code>&lt;div&gt;</code> - Division (container banane ke liye)</li>
                </ul>
                
                <p><strong>HTML Element:</strong> Opening tag + Content + Closing tag</p>
                <pre><code>&lt;h1&gt;This is a Heading&lt;/h1&gt;</code></pre>
                
                <p><strong>Self-closing tags:</strong> Kuch tags close nahi hote, jaise:</p>
                <pre><code>&lt;img src="photo.jpg" alt="Description"&gt;
&lt;br&gt;  (line break)
&lt;hr&gt;  (horizontal line)</code></pre>
                
                <p><strong>Nested Elements:</strong> Tags ke andar tags:</p>
                <pre><code>&lt;div&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;Paragraph inside div&lt;/p&gt;
&lt;/div&gt;</code></pre>`,
            practiceQuestions: [
                "HTML element kya hota hai?",
                "Self-closing tag ka example dijiye"
            ],
            miniTask: "Ek HTML file mein different headings (h1 to h6) aur paragraphs add karo",
            quiz: {
                question: "Kaun sa tag image ke liye use hota hai?",
                options: [
                    "<image>",
                    "<img>", 
                    "<picture>"
                ],
                correctAnswer: 1,
                explanation: "<img> tag images ke liye use hota hai. Yeh self-closing tag hai."
            }
        },
        {
            title: "HTML Attributes",
            notes: `<p><strong>Attributes:</strong> Tags ko extra information dete hain. Always opening tag mein aate hain.</p>
                
                <p><strong>Syntax:</strong></p>
                <pre><code>&lt;tag attribute="value"&gt;Content&lt;/tag&gt;</code></pre>
                
                <p><strong>Common Attributes:</strong></p>
                <ul>
                    <li><code>id</code> - Unique identifier</li>
                    <li><code>class</code> - Group elements for styling</li>
                    <li><code>style</code> - Inline CSS</li>
                    <li><code>src</code> - Source (images, videos)</li>
                    <li><code>href</code> - Hyperlink reference</li>
                    <li><code>alt</code> - Alternative text (images ke liye)</li>
                </ul>
                
                <p><strong>Examples:</strong></p>
                <pre><code>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;
&lt;img src="photo.jpg" alt="My Photo"&gt;
&lt;p class="important" id="main-text"&gt;This is important&lt;/p&gt;</code></pre>
                
                <p><strong>Multiple Attributes:</strong></p>
                <pre><code>&lt;input type="text" id="username" class="form-input" placeholder="Enter name"&gt;</code></pre>`,
            practiceQuestions: [
                "HTML attributes kya hote hain?",
                "href attribute kis tag ke saath use hota hai?"
            ],
            miniTask: "Ek link banaye jo Google par le jaye aur ek image add kare",
            quiz: {
                question: "Kaun sa attribute image ka alternative text define karta hai?",
                options: [
                    "title",
                    "text", 
                    "alt"
                ],
                correctAnswer: 2,
                explanation: "alt attribute image ka alternative text define karta hai. Agar image load nahi hoti toh yeh text dikhta hai."
            }
        },
        {
            title: "HTML Links and Navigation",
            notes: `<p><strong>Links banane ke liye:</strong> <code>&lt;a&gt;</code> tag use karte hain</p>
                
                <p><strong>Basic Link:</strong></p>
                <pre><code>&lt;a href="https://example.com"&gt;Click Here&lt;/a&gt;</code></pre>
                
                <p><strong>Different types of links:</strong></p>
                <ul>
                    <li><strong>External Link:</strong> Dusri website par
                        <pre><code>&lt;a href="https://facebook.com"&gt;Facebook&lt;/a&gt;</code></pre>
                    </li>
                    <li><strong>Internal Link:</strong> Apni hi website ke page par
                        <pre><code>&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></pre>
                    </li>
                    <li><strong>Email Link:</strong> Email client open kare
                        <pre><code>&lt;a href="mailto:hello@example.com"&gt;Email Us&lt;/a&gt;</code></pre>
                    </li>
                    <li><strong>Phone Link:</strong> Phone app open kare
                        <pre><code>&lt;a href="tel:+911234567890"&gt;Call Us&lt;/a&gt;</code></pre>
                    </li>
                </ul>
                
                <p><strong>Link Attributes:</strong></p>
                <ul>
                    <li><code>target="_blank"</code> - New tab mein open kare</li>
                    <li><code>title</code> - Hover par tooltip show kare</li>
                </ul>
                
                <p><strong>Example:</strong></p>
                <pre><code>&lt;a href="https://google.com" target="_blank" title="Go to Google"&gt;
    Search on Google
&lt;/a&gt;</code></pre>`,
            practiceQuestions: [
                "External link kaise banate hain?",
                "New tab mein link open karne ke liye kaunsa attribute use karte hain?"
            ],
            miniTask: "Ek navigation menu banaye jisme Home, About, Contact ka links ho",
            quiz: {
                question: "Email link banane ke liye href mein kya likhte hain?",
                options: [
                    "email:address@example.com",
                    "mailto:address@example.com", 
                    "sendto:address@example.com"
                ],
                correctAnswer: 1,
                explanation: "Email links ke liye 'mailto:' protocol use hota hai, jaise: mailto:hello@example.com"
            }
        },
        {
            title: "HTML Images and Multimedia",
            notes: `<p><strong>Images add karne ke liye:</strong> <code>&lt;img&gt;</code> tag use karte hain</p>
                
                <p><strong>Basic Image:</strong></p>
                <pre><code>&lt;img src="image.jpg" alt="Description"&gt;</code></pre>
                
                <p><strong>Important Attributes:</strong></p>
                <ul>
                    <li><code>src</code> - Image file ka path</li>
                    <li><code>alt</code> - Alternative text (required for accessibility)</li>
                    <li><code>width</code> - Width in pixels</li>
                    <li><code>height</code> - Height in pixels</li>
                    <li><code>title</code> - Tooltip text</li>
                </ul>
                
                <p><strong>Responsive Images:</strong></p>
                <pre><code>&lt;img src="image.jpg" alt="Desc" style="max-width: 100%; height: auto;"&gt;</code></pre>
                
                <p><strong>Video Add karna:</strong></p>
                <pre><code>&lt;video width="320" height="240" controls&gt;
    &lt;source src="movie.mp4" type="video/mp4"&gt;
    Your browser does not support video tag.
&lt;/video&gt;</code></pre>
                
                <p><strong>Audio Add karna:</strong></p>
                <pre><code>&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    Your browser does not support audio tag.
&lt;/audio&gt;</code></pre>`,
            practiceQuestions: [
                "Image tag mein alt attribute kyun important hai?",
                "Video add karne ke liye kaunsa tag use hota hai?"
            ],
            miniTask: "Ek webpage banaye jisme image aur video ho",
            quiz: {
                question: "Image responsive banane ke liye style attribute mein kya likhte hain?",
                options: [
                    "responsive: true;",
                    "max-width: 100%; height: auto;", 
                    "auto-size: true;"
                ],
                correctAnswer: 1,
                explanation: "Images ko responsive banane ke liye max-width: 100% aur height: auto use karte hain."
            }
        },
        {
            title: "HTML Lists - Ordered and Unordered",
            notes: `<p><strong>Two types of lists:</strong></p>
                
                <p><strong>1. Unordered List (Bullet Points):</strong></p>
                <pre><code>&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                
                <p><strong>2. Ordered List (Numbered):</strong></p>
                <pre><code>&lt;ol&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item&lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;</code></pre>
                
                <p><strong>Nested Lists:</strong> List ke andar list</p>
                <pre><code>&lt;ul&gt;
    &lt;li&gt;Fruits
        &lt;ul&gt;
            &lt;li&gt;Apple&lt;/li&gt;
            &lt;li&gt;Banana&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Vegetables&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                
                <p><strong>Description List:</strong></p>
                <pre><code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
    
    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code></pre>`,
            practiceQuestions: [
                "Ordered aur unordered list mein kya antar hai?",
                "Nested list kaise banate hain?"
            ],
            miniTask: "Ek shopping list banaye jisme categories ke andar items ho",
            quiz: {
                question: "Bullet points wali list banane ke liye kaunsa tag use hota hai?",
                options: [
                    "<ol>",
                    "<ul>", 
                    "<li>"
                ],
                correctAnswer: 1,
                explanation: "<ul> tag unordered list (bullet points) ke liye use hota hai. <ol> numbered list ke liye hota hai."
            }
        },
        {
            title: "HTML Tables for Data",
            notes: `<p><strong>Table Structure:</strong> Rows aur columns mein data organize karta hai</p>
                
                <p><strong>Basic Table:</strong></p>
                <pre><code>&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
        &lt;th&gt;City&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Rahul&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
        &lt;td&gt;Delhi&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                
                <p><strong>Table Tags:</strong></p>
                <ul>
                    <li><code>&lt;table&gt;</code> - Complete table</li>
                    <li><code>&lt;tr&gt;</code> - Table row</li>
                    <li><code>&lt;th&gt;</code> - Table header (bold by default)</li>
                    <li><code>&lt;td&gt;</code> - Table data (normal cell)</li>
                </ul>
                
                <p><strong>Table with colspan and rowspan:</strong></p>
                <pre><code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th colspan="2"&gt;Student Details&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td rowspan="2"&gt;Rahul&lt;/td&gt;
        &lt;td&gt;Math: 95&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Science: 88&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code></pre>
                
                <p><strong>Table Styling Attributes (old way):</strong></p>
                <ul>
                    <li><code>border</code> - Border width</li>
                    <li><code>cellpadding</code> - Cell ke andar space</li>
                    <li><code>cellspacing</code> - Cells ke beech space</li>
                    <li><code>width</code> - Table width</li>
                </ul>`,
            practiceQuestions: [
                "Table mein header cell aur normal cell ke liye alag-alag kaun se tags hote hain?",
                "Colspan attribute kya karta hai?"
            ],
            miniTask: "Ek student marksheet ka table banaye",
            quiz: {
                question: "Table ki ek row banane ke liye kaunsa tag use hota hai?",
                options: [
                    "<row>",
                    "<tr>", 
                    "<td>"
                ],
                correctAnswer: 1,
                explanation: "<tr> tag table row ke liye use hota hai. <td> table data (cell) ke liye aur <th> table header ke liye hota hai."
            }
        },
        {
            title: "HTML Forms - User Input",
            notes: `<p><strong>Forms:</strong> User se data lene ke liye</p>
                
                <p><strong>Basic Form:</strong></p>
                <pre><code>&lt;form action="/submit" method="POST"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
    
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>
                
                <p><strong>Form Attributes:</strong></p>
                <ul>
                    <li><code>action</code> - Form data kahan bhejna hai</li>
                    <li><code>method</code> - GET ya POST</li>
                </ul>
                
                <p><strong>Input Types:</strong></p>
                <ul>
                    <li><code>type="text"</code> - Text input</li>
                    <li><code>type="email"</code> - Email validation ke saath</li>
                    <li><code>type="password"</code> - Password (dots mein)</li>
                    <li><code>type="number"</code> - Only numbers</li>
                    <li><code>type="date"</code> - Date picker</li>
                    <li><code>type="checkbox"</code> - Checkboxes</li>
                    <li><code>type="radio"</code> - Radio buttons</li>
                    <li><code>type="file"</code> - File upload</li>
                </ul>
                
                <p><strong>Other Form Elements:</strong></p>
                <pre><code>&lt;textarea rows="4" cols="50"&gt;Default text&lt;/textarea&gt;
&lt;select&gt;
    &lt;option value="delhi"&gt;Delhi&lt;/option&gt;
    &lt;option value="mumbai"&gt;Mumbai&lt;/option&gt;
&lt;/select&gt;</code></pre>`,
            practiceQuestions: [
                "Form ke action attribute ka kya kaam hai?",
                "Password input field banane ke liye type attribute mein kya likhte hain?"
            ],
            miniTask: "Ek registration form banaye jisme name, email, password aur city ka dropdown ho",
            quiz: {
                question: "Form data server par bhejne ke liye kaunsa method secure hota hai?",
                options: [
                    "GET",
                    "POST", 
                    "SEND"
                ],
                correctAnswer: 1,
                explanation: "POST method secure hota hai kyunki yeh data URL mein show nahi karta. GET method URL mein data show karta hai."
            }
        },
        {
            title: "HTML5 Semantic Elements",
            notes: `<p><strong>Semantic Elements:</strong> Apne naam se hi apna purpose bataate hain</p>
                
                <p><strong>Why Semantic Elements?</strong></p>
                <ul>
                    <li>Code readable hota hai</li>
                    <li>Search engines ko samajhne mein aasani</li>
                    <li>Screen readers ke liye better</li>
                </ul>
                
                <p><strong>Common Semantic Elements:</strong></p>
                <ul>
                    <li><code>&lt;header&gt;</code> - Page ya section ka header</li>
                    <li><code>&lt;nav&gt;</code> - Navigation links</li>
                    <li><code>&lt;main&gt;</code> - Main content</li>
                    <li><code>&lt;section&gt;</code> - Thematic grouping</li>
                    <li><code>&lt;article&gt;</code> - Independent content</li>
                    <li><code>&lt;aside&gt;</code> - Sidebar content</li>
                    <li><code>&lt;footer&gt;</code> - Page ya section ka footer</li>
                </ul>
                
                <p><strong>Example Layout:</strong></p>
                <pre><code>&lt;header&gt;
    &lt;h1&gt;Website Title&lt;/h1&gt;
    &lt;nav&gt;...links...&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;article&gt;
        &lt;h2&gt;Article Title&lt;/h2&gt;
        &lt;p&gt;Article content...&lt;/p&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
        &lt;p&gt;Related links...&lt;/p&gt;
    &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;p&gt;Copyright 2023&lt;/p&gt;
&lt;/footer&gt;</code></pre>`,
            practiceQuestions: [
                "Semantic elements kya hote hain?",
                "<nav> tag ka kya use hai?"
            ],
            miniTask: "Ek semantic HTML5 webpage layout banaye",
            quiz: {
                question: "Kaun sa tag independent, self-contained content ke liye use hota hai?",
                options: [
                    "<section>",
                    "<div>", 
                    "<article>"
                ],
                correctAnswer: 2,
                explanation: "<article> tag independent, self-contained content ke liye use hota hai, jaise blog post, news article, etc."
            }
        },
        {
            title: "HTML Meta Tags and SEO Basics",
            notes: `<p><strong>Meta Tags:</strong> &lt;head&gt; section mein aate hain. Browser aur search engines ko information dete hain.</p>
                
                <p><strong>Common Meta Tags:</strong></p>
                <ul>
                    <li><strong>Character Encoding:</strong>
                        <pre><code>&lt;meta charset="UTF-8"&gt;</code></pre>
                    </li>
                    <li><strong>Viewport (Responsive Design):</strong>
                        <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
                    </li>
                    <li><strong>Description:</strong>
                        <pre><code>&lt;meta name="description" content="Website description"&gt;</code></pre>
                    </li>
                    <li><strong>Keywords:</strong>
                        <pre><code>&lt;meta name="keywords" content="HTML, CSS, JavaScript"&gt;</code></pre>
                    </li>
                    <li><strong>Author:</strong>
                        <pre><code>&lt;meta name="author" content="Your Name"&gt;</code></pre>
                    </li>
                </ul>
                
                <p><strong>SEO Best Practices:</strong></p>
                <ul>
                    <li>Unique title har page ka</li>
                    <li>Meaningful description</li>
                    <li>Proper heading hierarchy (h1 > h2 > h3)</li>
                    <li>Image alt text</li>
                    <li>Semantic HTML</li>
                    <li>Mobile-friendly design</li>
                </ul>
                
                <p><strong>Complete Head Section:</strong></p>
                <pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Learn coding for free"&gt;
    &lt;meta name="keywords" content="HTML, CSS, JavaScript, Coding"&gt;
    &lt;meta name="author" content="CodeGuru AI"&gt;
    &lt;title&gt;CodeGuru AI - Learn Coding&lt;/title&gt;
    &lt;link rel="icon" href="favicon.ico"&gt;
&lt;/head&gt;</code></pre>`,
            practiceQuestions: [
                "Viewport meta tag kya karta hai?",
                "SEO ke liye kaunsa meta tag important hai?"
            ],
            miniTask: "Ek HTML file ka head section optimize kare SEO ke liye",
            quiz: {
                question: "Responsive design ke liye viewport meta tag mein kya likhte hain?",
                options: [
                    "width=screen-width",
                    "width=device-width, initial-scale=1.0", 
                    "responsive=true"
                ],
                correctAnswer: 1,
                explanation: "width=device-width, initial-scale=1.0 viewport meta tag responsive design ke liye important hai."
            }
        }
        // Add 15 more HTML lessons here...
    ]
};