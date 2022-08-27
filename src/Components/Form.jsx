import React from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_xzdeivv",
        "template_65keif9",
        event.target,
        "T51KVUYJRx1ZZpEvN"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log("upps"));
    event.target.reset();
  };
  return (
    <div className="content ">
      <h1 className={`text-center titulo`}>
        <span className="text-danger">-</span>Contacto
        <span className="text-danger">-</span>
      </h1>
      <div className="contact-wrapper animated bounceInUp mt-5 w-75 m-auto">
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <p>
              <label>Nombre</label>
              <input type="text" name="nombre"  id="nombre"/>
            </p>
            <p>
              <label>Email</label>
              <input type="text" name="correo" id="correo"/>
            </p>
            <p className="block">
              <label>Mensaje</label>
              <textarea name="mensaje" rows="3" id="mensaje"></textarea>
            </p>
            <p className="block">
              <button>Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info m-auto">
          <img
            src="https://res.cloudinary.com/duddljshu/image/upload/v1658471255/WhatsApp_Image_2022-07-22_at_1.27.03_AM_qn41tf.jpg"
            alt=""
            style={{ width: "100%" }}
            className="ri-logo-circle-line "
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
