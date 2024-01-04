const contactForm = document.getElementById('contact-form')
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_4slwqx8', 'template_rch75pi', '#contact-form', '6KdFqS0hSxy-u8mYt')      
        .then(() => {
            contactMessage.textContent = 'Message sent successfully'

            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)
        })
}

contactForm.addEventListener('submit', sendEmail)