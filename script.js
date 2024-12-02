// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        menuBtn.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navMenu.classList.remove('active');
            menuOpen = false;
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove background and shadow
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }

        lastScroll = currentScroll;
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Typing effect for hero section
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();
    }

    // Skills progress animation
    const animateSkills = () => {
        document.querySelectorAll('.skill-progress').forEach(skill => {
            const progress = skill.getAttribute('data-progress');
            skill.style.width = progress + '%';
        });
    };

    // Trigger skill animation when skills section is in view
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillsObserver.observe(skillsSection);
    }

    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Contact Form Handling
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.name.value,
            email: this.email.value,
            message: this.message.value
        };

        // Add glitch effect to button during submission
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.classList.add('glitch-effect');
        
        try {
            // Here you would typically send the data to your backend
            // For now, we'll just simulate a submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message cyber-box';
            successMsg.innerHTML = `
                <p class="terminal-prompt">> MESSAGE_TRANSMITTED_SUCCESSFULLY</p>
                <p>Thank you for your message. I will respond shortly.</p>
            `;
            
            this.appendChild(successMsg);
            this.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        } catch (error) {
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message cyber-box';
            errorMsg.innerHTML = `
                <p class="terminal-prompt">> TRANSMISSION_ERROR</p>
                <p>Failed to send message. Please try again.</p>
            `;
            
            this.appendChild(errorMsg);
            
            // Remove error message after 5 seconds
            setTimeout(() => {
                errorMsg.remove();
            }, 5000);
        } finally {
            submitBtn.classList.remove('glitch-effect');
        }
    });

    // Add glitch effect to input fields on focus
    const cyberInputs = document.querySelectorAll('.cyber-input');
    cyberInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('input-focus');
        });
        
        input.addEventListener('blur', function() {
            this.classList.remove('input-focus');
        });
    });

    // Contact Form Handler
    class FormController {
        constructor() {
            this.form = document.getElementById('contact-form');
            if (this.form) {
                this.init();
            }
        }

        init() {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.setupFormValidation();
        }

        setupFormValidation() {
            const inputs = this.form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
            });
        }

        validateField(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';

            switch(field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    isValid = emailRegex.test(value);
                    errorMessage = 'Please enter a valid email address';
                    break;
                case 'text':
                    isValid = value.length >= 2;
                    errorMessage = 'This field is required (min 2 characters)';
                    break;
                case 'textarea':
                    isValid = value.length >= 10;
                    errorMessage = 'Please enter at least 10 characters';
                    break;
            }

            this.updateFieldValidation(field, isValid, errorMessage);
            return isValid;
        }

        updateFieldValidation(field, isValid, errorMessage) {
            const errorElement = field.nextElementSibling?.classList.contains('error-message') 
                ? field.nextElementSibling 
                : document.createElement('div');
            
            if (!errorElement.classList.contains('error-message')) {
                errorElement.classList.add('error-message');
                field.parentNode.insertBefore(errorElement, field.nextSibling);
            }

            field.classList.toggle('invalid', !isValid);
            errorElement.textContent = isValid ? '' : errorMessage;
            errorElement.style.display = isValid ? 'none' : 'block';
        }

        async handleSubmit(e) {
            e.preventDefault();
            
            const formData = new FormData(this.form);
            const isValid = Array.from(this.form.elements)
                .filter(el => el.tagName !== 'BUTTON')
                .every(field => this.validateField(field));

            if (!isValid) {
                this.showNotification('Please fix the errors in the form', 'error');
                return;
            }

            try {
                this.showLoadingState();
                // Simulate form submission - replace with actual API call
                await this.simulateSubmission();
                this.showNotification('Message sent successfully!', 'success');
                this.form.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                this.showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                this.hideLoadingState();
            }
        }

        showLoadingState() {
            const button = this.form.querySelector('button[type="submit"]');
            button.disabled = true;
            button.innerHTML = this.createLoadingHTML();
        }

        hideLoadingState() {
            const button = this.form.querySelector('button[type="submit"]');
            button.disabled = false;
            button.innerHTML = 'Send Message';
        }

        showNotification(message, type) {
            const notification = document.createElement('div');
            notification.classList.add('notification', type);
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }, 100);
        }

        async simulateSubmission() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        createLoadingHTML() {
            return `
                <span class="loading-text">PROCESSING</span>
                <div class="loading-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            `;
        }
    }

    // Enhanced Matrix Animation
    class MatrixEffect {
        constructor() {
            this.canvas = document.getElementById('matrixCanvas');
            this.ctx = this.canvas.getContext('2d');
            
            // Enhanced character set
            this.chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
            this.drops = [];
            
            // Visual settings
            this.fontSize = 16;
            this.maxStackHeight = 35; // Maximum number of characters in a stack
            this.frameRate = 30;
            this.lastFrame = 0;
            this.fps = 1000 / this.frameRate;
            
            // Initialize
            this.resizeCanvas();
            this.initDrops();
            
            // Event listeners
            window.addEventListener('resize', () => this.resizeCanvas());
            
            // Start animation
            this.animate();
        }

        resizeCanvas() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.columns = Math.floor(this.canvas.width / this.fontSize);
            this.initDrops();
        }

        initDrops() {
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = {
                    x: i * this.fontSize,
                    y: Math.random() * -100,
                    stack: [],
                    speed: Math.random() * 0.5 + 0.5,
                    lastUpdate: 0
                };
            }
        }

        getRandomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }

        draw(timestamp) {
            // Frame rate control
            if (timestamp - this.lastFrame < this.fps) return;
            this.lastFrame = timestamp;

            // Semi-transparent black background for trail effect
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Set text properties
            this.ctx.font = this.fontSize + 'px monospace';
            this.ctx.textAlign = 'center';

            // Update and draw each drop
            this.drops.forEach(drop => {
                // Update position
                drop.y += drop.speed;

                // Add new character to stack
                if (Math.random() > 0.975) {
                    drop.stack.unshift(this.getRandomChar());
                    if (drop.stack.length > this.maxStackHeight) {
                        drop.stack.pop();
                    }
                }

                // Draw characters in stack
                drop.stack.forEach((char, i) => {
                    const alpha = 1 - (i / this.maxStackHeight);
                    const glow = i === 0 ? 20 : 0;
                    
                    // First character (brightest)
                    if (i === 0) {
                        this.ctx.fillStyle = '#fff';
                        this.ctx.shadowColor = '#0f0';
                        this.ctx.shadowBlur = 10;
                    }
                    // Second character (bright green)
                    else if (i === 1) {
                        this.ctx.fillStyle = '#0f0';
                        this.ctx.shadowBlur = 0;
                    }
                    // Rest of the characters (fading green)
                    else {
                        this.ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
                        this.ctx.shadowBlur = 0;
                    }

                    this.ctx.fillText(
                        char,
                        drop.x,
                        drop.y - (i * this.fontSize)
                    );
                });

                // Reset drop when it goes off screen
                if (drop.y - (drop.stack.length * this.fontSize) > this.canvas.height) {
                    drop.y = Math.random() * -100;
                    drop.stack = [];
                    drop.speed = Math.random() * 0.5 + 0.5;
                }
            });
        }

        animate(timestamp) {
            this.draw(timestamp);
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    // Boot Sequence Controller
    class BootSequence {
        constructor() {
            this.bootScreen = document.querySelector('.boot-screen');
            this.bootText = document.querySelector('.boot-text');
            this.pressKeyPrompt = document.querySelector('.press-key-prompt');
            this.mainContent = document.querySelector('.crt.main-content');
            this.bootComplete = false;
            this.typingSpeed = 50;
            this.messageDelay = 1000;
        }

        async start() {
            // Hide main content initially
            if (this.mainContent) {
                this.mainContent.style.display = 'none';
                this.mainContent.style.opacity = '0';
            }
            
            // Start typing boot messages
            await this.typeMessages();
            
            // Show press key prompt and update text
            if (this.pressKeyPrompt) {
                this.pressKeyPrompt.style.display = 'block';
                this.pressKeyPrompt.innerHTML = 'PRESS ANY KEY OR CLICK/TAP TO CONTINUE_';
                this.bootComplete = true;
            }
            
            // Add event listeners
            document.addEventListener('keypress', this.handleContinue.bind(this));
            document.addEventListener('click', this.handleContinue.bind(this));
            document.addEventListener('touchstart', this.handleContinue.bind(this));
        }

        async typeMessages() {
            const bootMessages = [
                '> INITIALIZING SYSTEM...',
                '> LOADING CORE MODULES...',
                '> ESTABLISHING SECURE CONNECTION...',
                '> CONFIGURING NEURAL INTERFACE...',
                '> ACTIVATING QUANTUM PROCESSORS...',
                '> DECRYPTING USER DATA...',
                '> SYSTEM BOOT SEQUENCE COMPLETE.',
                '> WELCOME TO CHIRAG\'S PORTFOLIO v2024.1',
            ];

            for (const message of bootMessages) {
                await this.typeMessage(message);
                await this.wait(this.messageDelay);
            }
        }

        async typeMessage(message) {
            const messageElement = document.createElement('p');
            messageElement.classList.add('boot-line');
            this.bootText.appendChild(messageElement);

            for (let char of message) {
                await this.wait(this.typingSpeed);
                messageElement.textContent += char;
            }
        }

        wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        handleContinue(event) {
            // Prevent multiple triggers
            if (!this.bootComplete || this.isTransitioning) return;
            this.isTransitioning = true;
            
            // Remove all event listeners
            document.removeEventListener('keypress', this.handleContinue.bind(this));
            document.removeEventListener('click', this.handleContinue.bind(this));
            document.removeEventListener('touchstart', this.handleContinue.bind(this));
            
            // Fade out boot screen
            if (this.bootScreen) {
                this.bootScreen.style.opacity = '0';
                
                // Show main content after fade
                setTimeout(() => {
                    if (this.bootScreen) this.bootScreen.style.display = 'none';
                    if (this.mainContent) {
                        this.mainContent.style.display = 'block';
                        document.body.classList.add('loaded');
                        
                        // Fade in main content
                        requestAnimationFrame(() => {
                            this.mainContent.style.opacity = '1';
                        });
                    }
                }, 1000);
            }
        }
    }

    // System Status Controller
    class SystemStatus {
        constructor() {
            this.uptimeElement = document.getElementById('uptime');
            this.startTime = Date.now();
            this.updateUptime();
        }

        updateUptime() {
            setInterval(() => {
                const uptime = Math.floor((Date.now() - this.startTime) / 1000);
                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = uptime % 60;
                this.uptimeElement.textContent = 
                    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);
        }
    }

    // Enhanced Glitch Text Effect
    class GlitchText {
        constructor(element) {
            this.element = element;
            this.originalText = element.getAttribute('data-text') || element.textContent;
            this.chars = '!<>-_\\/[]{}—=+*^?#_________';
            this.isGlitching = false;
            this.init();
        }

        init() {
            this.element.addEventListener('mouseover', () => this.startGlitch());
            this.element.addEventListener('mouseout', () => this.stopGlitch());
        }

        startGlitch() {
            if (this.isGlitching) return;
            this.isGlitching = true;
            this.glitchLoop();
        }

        stopGlitch() {
            this.isGlitching = false;
            this.element.textContent = this.originalText;
        }

        async glitchLoop() {
            while (this.isGlitching) {
                const text = this.originalText.split('');
                const iterations = Math.floor(Math.random() * 6) + 1;
                
                for (let i = 0; i < iterations; i++) {
                    const index = Math.floor(Math.random() * text.length);
                    text[index] = this.chars[Math.floor(Math.random() * this.chars.length)];
                }
                
                this.element.textContent = text.join('');
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }
    }

    // Terminal Text Effect
    class TerminalText {
        constructor(element, text = null, speed = 50) {
            this.element = element;
            this.text = text || element.textContent;
            this.speed = speed;
            this.current = '';
            this.index = 0;
            this.cursorVisible = true;
            this.init();
        }

        init() {
            this.element.textContent = '';
            this.type();
            this.blinkCursor();
        }

        async type() {
            while (this.index < this.text.length) {
                await this.wait(this.speed + Math.random() * 50);
                this.current += this.text[this.index];
                this.updateText();
                this.index++;
            }
        }

        blinkCursor() {
            setInterval(() => {
                this.cursorVisible = !this.cursorVisible;
                this.updateText();
            }, 500);
        }

        updateText() {
            this.element.textContent = this.current + (this.cursorVisible ? '█' : '');
        }

        wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    // Scroll Observer
    class ScrollObserver {
        constructor() {
            this.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        if (entry.target.classList.contains('skill-progress')) {
                            const progress = entry.target.getAttribute('data-progress');
                            entry.target.style.width = progress + '%';
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px'
            });
        }

        init() {
            document.querySelectorAll('.animate-on-scroll, .skill-progress, .project-card').forEach(el => {
                this.observer.observe(el);
            });
        }
    }

    // Initialize everything
    const boot = new BootSequence();
    boot.start();

    const systemStatus = new SystemStatus();
    const scrollObserver = new ScrollObserver();
    scrollObserver.init();
    const formController = new FormController();

    // Initialize glitch effects
    document.querySelectorAll('.glitch').forEach(element => {
        new GlitchText(element);
    });

    // Initialize terminal text effects
    document.querySelectorAll('.typewriter').forEach(element => {
        new TerminalText(element);
    });

    // Initialize Matrix Effect
    new MatrixEffect();
});
