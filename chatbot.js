/* =============================================
   TOGGLE CARDS (expandable sections)
   ============================================= */
function toggleCard(element) {
    element.classList.toggle('active');
}

/* =============================================
   CLASSIC CHATBOT — predefined questions
   ============================================= */
const QA = [
    { q: "Who is Djama?", a: "I am Djama Mohamed Moussa, an engineering student passionate about web development and programming." },
    { q: "What services do you offer?", a: "I offer two main services: creating modern, responsive showcase websites, and task automation using Python and Node.js scripts." },
    { q: "Can you build websites?", a: "Yes! I design sites that are SEO-optimized, mobile-responsive, and visually modern." },
    { q: "Do you do automation?", a: "Absolutely. I develop Python and Node.js scripts to automate data collection, reports, or any repetitive task." },
    { q: "What are your projects?", a: "I built a Sonic video game in HTML5/Canvas/JS, a Login/Sign-up app in C++, and a weather app using the OpenWeatherMap API." },
    { q: "What languages do you know?", a: "I know HTML5, CSS3, JavaScript, Python, Node.js, and C++. I'm always learning new technologies." },
    { q: "How can I contact you?", a: "You can reach me by phone at +253 77 22 20 42 or by email at djamam782@gmail.com." },
    { q: "What are your available hours?", a: "I am available Sunday through Thursday for your projects. I reply to emails within 24 hours maximum." },
    { q: "Do you accept freelance projects?", a: "Yes, I am open to freelance projects! Contact me by email or phone to discuss your needs and get a quote." },
    { q: "Are you available for an internship?", a: "As an engineering student, I am open to internship opportunities. Feel free to contact me at djamam782@gmail.com." }
];

const bubble   = document.getElementById('chat-bubble');
const chatbox  = document.getElementById('chatbox');
const messages = document.getElementById('messages');
const panel    = document.getElementById('questions-panel');
const closeBtn = document.getElementById('chat-close');
const badge    = document.getElementById('chat-badge');

let isOpen = false, usedSet = new Set(), initiated = false;

function addMessage(text, type) {
    const d = document.createElement('div');
    d.className = 'msg ' + type;
    if (type === 'bot') d.innerHTML = text; else d.textContent = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
}

function buildButtons() {
    const label = document.getElementById('questions-label');
    panel.innerHTML = '';
    panel.appendChild(label);
    QA.forEach(function(item, i) {
        const btn = document.createElement('button');
        btn.className = 'q-btn' + (usedSet.has(i) ? ' used' : '');
        btn.textContent = item.q;
        btn.onclick = function() {
            usedSet.add(i);
            addMessage(item.q, 'user');
            setTimeout(function() { addMessage(item.a, 'bot'); }, 420);
            buildButtons();
        };
        panel.appendChild(btn);
    });
}

bubble.addEventListener('click', function() {
    isOpen = !isOpen;
    chatbox.style.display = isOpen ? 'flex' : 'none';
    badge.style.display = isOpen ? 'none' : 'flex';
    if (isOpen && !initiated) { buildButtons(); initiated = true; }
    if (isOpen && aiOpen) { closeAI(); }
});

closeBtn.addEventListener('click', function() {
    isOpen = false;
    chatbox.style.display = 'none';
    badge.style.display = 'flex';
});

/* =============================================
   AI CHATBOT — smart local responses
   (no API needed, works offline)
   ============================================= */

const AI_RESPONSES = [
    {
        tags: ["who", "djama", "you", "you are", "introduce", "profile", "tell me about"],
        replies: [
            "I am the assistant of <strong>Djama Mohamed Moussa</strong>, an engineering student based in Djibouti. Passionate about web development and programming, he masters HTML5, CSS3, JavaScript, Python, Node.js and C++. Available for freelance projects and internships! 🚀",
            "<strong>Djama Mohamed Moussa</strong> is an engineering student based in Djibouti, passionate about code. He offers web creation and automation services. Contact him at djamam782@gmail.com."
        ]
    },
    {
        tags: ["service", "do", "offer", "work", "help", "development", "provide"],
        replies: [
            "Djama offers two services:<br>🌐 <strong>Website creation</strong> — modern, responsive and SEO-optimized<br>⚙️ <strong>Automation</strong> — Python/Node.js scripts for your repetitive tasks.",
            "Need a website or want to automate processes? Djama can help! Contact him at +253 77 22 20 42 for a quote!"
        ]
    },
    {
        tags: ["site", "web", "showcase", "html", "css", "responsive", "seo", "frontend"],
        replies: [
            "Djama designs <strong>modern showcase websites</strong> in HTML5, CSS3 and JavaScript. His sites are responsive (mobile/tablet) and SEO-optimized. Write to him at djamam782@gmail.com! 🌐",
            "For website creation, Djama masters HTML5, CSS3, JavaScript. He builds <strong>responsive</strong> interfaces and smooth animations. Call +253 77 22 20 42."
        ]
    },
    {
        tags: ["python", "automation", "script", "node", "task", "report", "bot"],
        replies: [
            "Djama develops <strong>automation scripts</strong> in Python and Node.js — automated reports, data collection, repetitive tasks. Contact him at djamam782@gmail.com! ⚙️",
            "With Python and Node.js, Djama automates data collection, reports, and custom scripts. Write to him at djamam782@gmail.com. 🤖"
        ]
    },
    {
        tags: ["project", "portfolio", "sonic", "game", "login", "cpp", "weather", "realization"],
        replies: [
            "Djama's projects:<br>🎮 <strong>Sonic Game</strong> — HTML5 Canvas + JavaScript<br>🔐 <strong>Login/Sign-up App</strong> — C++ with encryption<br>🌤️ <strong>Weather App</strong> — OpenWeatherMap API<br>💼 <strong>Web Portfolio</strong> with AI chatbot",
            "Among his projects: a <strong>Sonic game</strong> in HTML5/JS, a <strong>secure login app</strong> in C++, and a <strong>real-time weather app</strong>. 🏆"
        ]
    },
    {
        tags: ["language", "technology", "master", "skill", "know", "stack", "tech"],
        replies: [
            "Djama masters:<br>🌐 <strong>Web:</strong> HTML5, CSS3, JavaScript<br>⚙️ <strong>Scripts:</strong> Python, Node.js<br>🖥️ <strong>System:</strong> C++ 📚",
            "Djama's stack: <strong>HTML5, CSS3, JavaScript</strong> for web — <strong>Python & Node.js</strong> for automation — <strong>C++</strong> for system programming."
        ]
    },
    {
        tags: ["contact", "reach", "email", "mail", "phone", "call", "message", "write"],
        replies: [
            "Contact Djama:<br>📧 <strong>Email:</strong> djamam782@gmail.com<br>📞 <strong>Phone:</strong> +253 77 22 20 42<br>🕐 Available Sunday to Thursday — reply within 24h. 📬",
            "To contact Djama: <strong>djamam782@gmail.com</strong> or <strong>+253 77 22 20 42</strong>. Guaranteed reply within 24h! 😊"
        ]
    },
    {
        tags: ["freelance", "price", "rate", "quote", "cost", "how much"],
        replies: [
            "Djama is open to <strong>freelance</strong> projects! Offers: Starter (10,000 FDJ), Pro (18,000 FDJ), Premium (35,000 FDJ). Contact him for a quote! 💼",
            "For pricing, contact Djama at <strong>djamam782@gmail.com</strong> or +253 77 22 20 42 for a custom quote. ⚡"
        ]
    },
    {
        tags: ["internship", "hire", "recruit", "job", "work with"],
        replies: [
            "Djama is <strong>open to internship opportunities</strong>. Write to him at djamam782@gmail.com with the details of your offer! 🎓",
            "For an internship, contact Djama at djamam782@gmail.com or +253 77 22 20 42! 🚀"
        ]
    },
    {
        tags: ["djibouti", "location", "country", "city", "where", "based", "lives"],
        replies: [
            "Djama is based in <strong>Djibouti</strong> 📍. He can work remotely with clients anywhere in the world! 🌍",
            "Djama works from <strong>Djibouti</strong> but handles projects remotely. Available Sunday to Thursday! 📍"
        ]
    },
    {
        tags: ["hello", "hi", "hey", "good morning", "good evening", "greetings", "salam"],
        replies: [
            "Hello! 👋 I am the AI assistant of <strong>Djama Mohamed Moussa</strong>. Ask me anything about his profile, services, or projects! 😊",
            "Hi! 🤖 Welcome to <strong>Djama</strong>'s portfolio. How can I help you?"
        ]
    },
    {
        tags: ["thanks", "great", "perfect", "cool", "awesome", "excellent", "nice", "ok", "good"],
        replies: [
            "Thank you! 😊 Feel free to ask if you have any other questions about Djama's work.",
            "Glad I could help! 🚀 Don't hesitate to reach out if you need anything else."
        ]
    },
    {
        tags: ["available", "when", "schedule", "hours", "open", "busy"],
        replies: [
            "Djama is available <strong>Sunday to Thursday</strong>. He replies to emails within 24 hours maximum. 🕐",
            "Best time to reach Djama is <strong>Sunday to Thursday</strong>. Email djamam782@gmail.com anytime! 📬"
        ]
    }
];

function findAIResponse(input) {
    const text = input.toLowerCase();
    for (const group of AI_RESPONSES) {
        if (group.tags.some(tag => text.includes(tag))) {
            const replies = group.replies;
            return replies[Math.floor(Math.random() * replies.length)];
        }
    }
    return "I'm not sure I understood. Try asking about Djama's <strong>services</strong>, <strong>projects</strong>, <strong>pricing</strong>, or how to <strong>contact</strong> him! 😊";
}

/* =============================================
   AI CHATBOT — UI Logic
   ============================================= */
let aiOpen = false;

function openAI() {
    aiOpen = true;
    document.getElementById('ai-chatbox').style.display = 'flex';
    document.getElementById('ai-badge').style.display = 'none';
    if (isOpen) {
        isOpen = false;
        chatbox.style.display = 'none';
        badge.style.display = 'flex';
    }
    setTimeout(function() { document.getElementById('ai-input').focus(); }, 100);
}

function closeAI() {
    aiOpen = false;
    document.getElementById('ai-chatbox').style.display = 'none';
    document.getElementById('ai-badge').style.display = 'flex';
}

document.getElementById('ai-bubble').addEventListener('click', function() {
    if (aiOpen) { closeAI(); } else { openAI(); }
});

document.getElementById('ai-close').addEventListener('click', closeAI);

function addAIMessage(type, html) {
    const aiMessages = document.getElementById('ai-messages');
    const d = document.createElement('div');
    d.className = 'msg ' + type;
    d.innerHTML = html;
    aiMessages.appendChild(d);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function showTyping() {
    const aiMessages = document.getElementById('ai-messages');
    const t = document.createElement('div');
    t.className = 'msg bot';
    t.id = 'ai-typing';
    t.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    aiMessages.appendChild(t);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function removeTyping() {
    const t = document.getElementById('ai-typing');
    if (t) t.remove();
}

async function sendAIMessage() {
    const input = document.getElementById('ai-input');
    const sendBtn = document.getElementById('ai-send-btn');
    const userText = input.value.trim();
    if (!userText) return;

    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;

    addAIMessage('user', userText);
    showTyping();

    // Natural thinking delay
    const delay = 600 + Math.random() * 700;
    await new Promise(function(resolve) { setTimeout(resolve, delay); });

    removeTyping();
    const reply = findAIResponse(userText);
    addAIMessage('bot', reply);

    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
}

document.getElementById('ai-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAIMessage(); }
});

document.getElementById('ai-send-btn').addEventListener('click', sendAIMessage);

/* =============================================
   ANIMATIONS — scroll reveal + ripple + 3D hover
   ============================================= */
(function() {
    const style = document.createElement('style');
    style.textContent = [
        '.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.34,1.2,0.64,1); }',
        '.reveal.visible { opacity: 1; transform: translateY(0); }',
        '.ripple-effect { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.25); transform: scale(0); animation: rippleAnim 0.55s ease-out forwards; pointer-events: none; }',
        '@keyframes rippleAnim { to { transform: scale(4); opacity: 0; } }',
        'a > .card { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, box-shadow 0.3s !important; }',
        'a:hover > .card { transform: translateY(-6px) !important; border-color: rgba(230,126,34,0.4) !important; box-shadow: 0 0 30px rgba(230,126,34,0.12), 0 12px 40px rgba(0,0,0,0.6) !important; }',
        '#cursor-glow { position: fixed; pointer-events: none; z-index: 9990; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(230,126,34,0.06) 0%, transparent 70%); transform: translate(-50%, -50%); transition: opacity 0.3s; }'
    ].join('');
    document.head.appendChild(style);

    // Cursor glow
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    document.body.appendChild(glow);
    document.addEventListener('mousemove', function(e) {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
    });

    // Scroll Reveal
    const targets = document.querySelectorAll('.item.expandable, .card, .contact-info-card');
    targets.forEach(function(el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (i * 0.06) + 's';
    });

    const obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });

    // Ripple on orange buttons
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('a[style*="background:var(--accent-orange)"], a[style*="background: var(--accent-orange)"], .submit-btn');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const r = document.createElement('span');
        r.className = 'ripple-effect';
        const size = Math.max(rect.width, rect.height);
        r.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - rect.left - size/2) + 'px;top:' + (e.clientY - rect.top - size/2) + 'px;';
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(r);
        setTimeout(function() { r.remove(); }, 600);
    });

    // 3D tilt on cards
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width  - 0.5;
            const y = (e.clientY - rect.top)  / rect.height - 0.5;
            card.style.transform = 'translateY(-3px) perspective(600px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 4) + 'deg)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // Typed text effect on hero title
    const heroTitle = document.querySelector('h1[style*="font-size:2.5rem"]');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #e67e22';
        let i = 0;
        const typeInt = setInterval(function() {
            heroTitle.textContent += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(typeInt);
                setTimeout(function() { heroTitle.style.borderRight = 'none'; }, 500);
            }
        }, 55);
    }

})();
