import React from 'react';
import "./Contact.css";




const Contact = () => {
  return (
    
<section className="contact" id="contact">
  <div className="container min-vh-100">
    <div className="row justify-content-center">
      <h1 className="heading"><span>'</span> Prendre un RDV <span>'</span></h1>
      <div className="col-md-10" data-aos="flip-down">
        <form action>
          <div className="inputBox">
            <input type="text" placeholder="Nom et Prénom" />
            <input type="number" placeholder="Téléphone" />
          </div>
          <div className="inputBox">
            <input type="email" placeholder="Email" />
            <select name id>
              <option value disabled selected>Prendre RDV</option>
              <option value="09-12 am">09-12 </option>
              <option value="12-03 pm">12-15 </option>
              <option value="03-06 pm">15-18 </option>
              <option value="06-09 pm">18-21 </option>
            </select>
          </div>
          <textarea name id cols={30} rows={10} placeholder="message ( optionnel )" defaultValue={""} />
          <input type="submit" name id defaultValue="make appointment" className="button" />
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact