// pages/TermsConditions.jsx
import React from 'react';

const TermsConditions = () => {
  return (
    <div className="terms">
      <h1 className="terms__title">Terms and Conditions</h1>
      <div className="terms__content">
        <section className="terms__section">
          <p className="terms__section-text">
            Adinath supplies and offers its products and services only to authorised and legal brands and entities. 
            We have a thorough and multitier vetting process and hence we might require various sets of documentation 
            from your end to satisfy and authenticate the fact that you are a legal brand and the ordering party has 
            legal authorisation to place orders on us for the same. We are well within our rights to report to the 
            actual & legal brand owners or to law enforcement agencies if we receive any suspicious or dubious enquiries.
          </p>
          
          <p className="terms__section-text">
            If you have any questions on the same Please write to us on the below address:
          </p>
          
          <address className="terms__address">
            Legal Department<br />
            Adinath,<br />
            #13/37, 4th Floor, Sampurna Chambers,<br />
            Vasavi Temple Road, VVPuram,<br />
            Bangalore 560004<br />
            India
          </address>
        </section>
        
        <section className="terms__section">
          <h2 className="terms__section-title">Service Scope</h2>
          <p className="terms__section-text">
            Our service offerings are strictly for authorized brands and businesses. We provide technology solutions 
            for product authentication and anti-counterfeiting purposes. By using our services, you acknowledge 
            and agree that you have the legal rights to represent the brand or business for which you are seeking 
            our services.
          </p>
        </section>
        
        <section className="terms__section">
          <h2 className="terms__section-title">Intellectual Property</h2>
          <p className="terms__section-text">
            All technology, software, solutions, and systems provided by Adinath remain the intellectual property 
            of Adinath. Clients are granted a limited license to use these solutions for the specific purposes 
            outlined in individual service agreements.
          </p>
        </section>
        
        <section className="terms__section">
          <h2 className="terms__section-title">Client Responsibilities</h2>
          <p className="terms__section-text">
            Clients are responsible for:
          </p>
          <ul className="terms__list">
            <li className="terms__list-item">Providing accurate information about their brand and products</li>
            <li className="terms__list-item">Implementing our solutions according to provided guidelines</li>
            <li className="terms__list-item">Maintaining confidentiality regarding our technology and implementation details</li>
            <li className="terms__list-item">Using our services only for legal products and purposes</li>
          </ul>
        </section>
        
        <section className="terms__section">
          <h2 className="terms__section-title">Limitation of Liability</h2>
          <p className="terms__section-text">
            Adinath provides authentication and anti-counterfeiting services on an "as is" basis. While we 
            strive to provide effective solutions, we cannot guarantee complete prevention of counterfeiting. 
            Our liability is limited to the terms specified in individual service agreements.
          </p>
        </section>
        
        <section className="terms__section">
          <h2 className="terms__section-title">Termination</h2>
          <p className="terms__section-text">
            Adinath reserves the right to terminate services to any client found to be in violation of these 
            terms and conditions, or if fraudulent or illegal activity is suspected. In such cases, Adinath 
            may report such activities to relevant authorities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;