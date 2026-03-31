function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p><b>Email:</b>okolichinemerem243@gmail.com</p>
      <br />
      <p><b>Whatsapp Contact:</b>09132726149</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required/>
        <input type="text" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="summit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;