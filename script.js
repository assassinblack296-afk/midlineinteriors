// Sticky Header and Scroll Reveal
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});

// WhatsApp Integration
const consultationForm = document.getElementById('consultationForm');
consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const ownerPhone = '917904138703';
    const whatsappMessage = `Hi Midline Construction,%0A%0AI'm interested in your construction/interior services.%0A%0A*Details:*%0A- Name: ${name}%0A- Phone: ${phone}%0A- Service: ${service}%0A- Message: ${message}%0A%0ALooking forward to hearing from you!`;

    const whatsappUrl = `https://wa.me/${ownerPhone}?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    consultationForm.reset();
    alert('Information shared via WhatsApp. We will contact you soon!');
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Chatbot Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChat = document.getElementById('close-chat');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Initial reveal check for items already in view
window.dispatchEvent(new Event('scroll'));

// --- Lightbox Functional Logic ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Open Lightbox
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgDiv = item.querySelector('.portfolio-img');
        const bgImage = window.getComputedStyle(imgDiv).backgroundImage;
        // Clean the background-image URL
        const imageUrl = bgImage.replace(/^url\(['"](.+)['"]\)/, '$1');

        const title = item.querySelector('h3').innerText;
        const sub = item.querySelector('p').innerText;

        lightbox.style.display = 'block';
        lightboxImg.src = imageUrl;
        captionText.innerHTML = `<strong>${title}</strong><br>${sub}`;

        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
    });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close on 'Esc' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
