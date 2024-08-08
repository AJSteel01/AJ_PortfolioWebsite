// scripts/chatbot.js
document.addEventListener('DOMContentLoaded', () => {
    const responses = {
        greeting: [
            "Hello! How can I assist you today?",
            "Hi there! What would you like to know about me?",
            "Hey! How can I help you today?"
        ],
        resume_inquiry: [
            "You can download my resume [here](./Sample_Resume_Template.pdf). If you have any questions about it, feel free to ask!",
            "My resume is available for download [here](./Sample_Resume_Template.pdf). Let me know if you need any more information."
        ],
        skills_inquiry: [
            "I have expertise in JavaScript, React, Node.js, Python, and many other technologies. Is there a specific skill you want to know more about?",
            "My skills include JavaScript, React, Node.js, Python, C++, Java, and more. Let me know if you'd like details on a particular skill!"
        ],
        education_inquiry: [
            "I have a Bachelor's degree in Computer Science with a minor in Data Analytics. If you have questions about my education, just ask!",
            "I hold a Bachelor's degree in Computer Science and a minor in Data Analytics. Feel free to ask if you need more information about my academic background."
        ],
        experience_inquiry: [
            "I worked as a PowerApps Trainee Intern at Celebal Technologies from May 2023 to July 2023 and as a Freelance Web Developer since 2020. Let me know if you'd like more details about my work experience!",
            "My recent work experience includes an internship at Celebal Technologies and freelance web development projects. If you need more specifics, just let me know!"
        ],
        project_inquiry: [
            "You can explore my completed projects [here](#projects). If you have any questions about a specific project, feel free to ask!",
            "I have completed several projects which you can view in the Projects section. Let me know if you need more details about any particular project!"
        ],
        contact_inquiry: [
            "You can contact me via email at abhigyanworks.2021@gmail.com. Feel free to reach out if you have any questions or opportunities!",
            "For inquiries or opportunities, please email me at abhigyanworks.2021@gmail.com. I'm looking forward to connecting with you!"
        ],
        default: [
            "I'm not sure how to respond to that. Could you please clarify your question?",
            "I didn't quite understand that. Can you please rephrase your question?",
            "I'm not sure I have an answer for that. Can you ask something else or be more specific?"
        ]
    };

    const patterns = {
        greeting: /hello|hi|hey|greetings|good morning|good afternoon|good evening/i,
        resume_inquiry: /resume|cv|curriculum vitae|download|resume link/i,
        skills_inquiry: /skills|technologies|expertise|what do you know/i,
        education_inquiry: /education|degree|academic background|study/i,
        experience_inquiry: /experience|work experience|job history|previous roles/i,
        project_inquiry: /projects|completed projects|portfolio|examples/i,
        contact_inquiry: /contact|email|reach out|get in touch/i
    };

    const getResponse = (input) => {
        input = input.toLowerCase();

        for (const intent in patterns) {
            if (patterns[intent].test(input)) {
                const responsesList = responses[intent];
                return responsesList[Math.floor(Math.random() * responsesList.length)];
            }
        }
        
        return responses.default[Math.floor(Math.random() * responses.default.length)];
    };

    const chatInput = document.getElementById('user-input');
    const chatLog = document.getElementById('chat-log');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const userMessage = chatInput.value;
        if (userMessage.trim()) {
            chatLog.innerHTML += `<li><span class="avatar user">You</span><div class="message">${userMessage}</div></li>`;
            const botResponse = getResponse(userMessage);
            chatLog.innerHTML += `<li><span class="avatar bot">AI</span><div class="message">${botResponse}</div></li>`;
            chatInput.value = '';
            chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
        }
    });
});
