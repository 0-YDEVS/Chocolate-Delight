    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('#contact form'); // Sélectionne le formulaire spécifiquement dans la section contact
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi traditionnel du formulaire
    
            // Récupère les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            // Construire le message pour WhatsApp
            const whatsappMessage = `Hello, I would like to inquire about your products.
    Name: ${name}
    Email: ${email}
    Message: ${message}`;
    
            // Encode l'URL pour WhatsApp
            const encodedMessage = encodeURIComponent(whatsappMessage);
    
            // Lien vers WhatsApp avec le message pré-rempli
            const whatsappUrl = `https://wa.me/212629422435?text=${encodedMessage}`;
    
            // Redirige l'utilisateur vers WhatsApp
            window.open(whatsappUrl, '_blank');
        });



    const iframe = document.querySelector("iframe[data-src]");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iframe.src = iframe.getAttribute("data-src");
                observer.unobserve(iframe);
            }
        });
    });
    observer.observe(iframe);
});

function openModal() {
    // Affiche le modal et réinitialise les options de paiement et les formulaires
    document.getElementById("paymentModal").style.display = "flex";
    document.querySelectorAll('.payment-option').forEach(button => button.style.display = 'block');
    hideAllForms();
}

function closeModal() {
    // Cache le modal et réinitialise l'affichage des options de paiement
    document.getElementById("paymentModal").style.display = "none";
    document.querySelectorAll('.payment-option').forEach(button => button.style.display = 'block');
    hideAllForms();
}

// Ferme le modal en cliquant à l'extérieur du contenu
window.onclick = function(event) {
    const modal = document.getElementById("paymentModal");
    if (event.target === modal) {
        closeModal();
    }
}

function showCreditCardForm() {
    hideAllForms();
    document.getElementById('creditCardForm').style.display = 'block';
}

function showPayPalForm() {
    hideAllForms();
    document.getElementById('paypalForm').style.display = 'block';
}

function showApplePayForm() {
    hideAllForms();
    document.getElementById('applePayForm').style.display = 'block';
}

function hideAllForms() {
    // Masque tous les formulaires de paiement
    document.querySelectorAll('.payment-form').forEach(form => form.style.display = 'none');
}

// Simule la redirection vers PayPal
function redirectToPayPal() {
    alert("Redirecting to PayPal...");
    // Redirection simulée vers PayPal
}

// Simule le traitement du paiement Apple Pay
function processApplePay() {
    alert("Processing Apple Pay...");
    // Traitement simulé pour Apple Pay
}

