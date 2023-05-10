import { useRef } from 'react';
import { Wrapper, MainText, FormWrapper, SecondFormWrapper } from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = ({ refContact }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ms9mlmb', 'template_kd0edte', form.current, '0ZP_UQjPxH9mMXbk5').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <Wrapper ref={refContact}>
      <MainText>Kontakt</MainText>

      <FormWrapper ref={form} onSubmit={sendEmail}>
        <SecondFormWrapper>
          <input type="text" placeholder="Kto pisze?" name="user_name" />
          <input type="email" placeholder="Email do kontaktu" name="user_email" />
        </SecondFormWrapper>
        <input type="text" placeholder="Temat" name="subject" />
        <textarea name="message" cols="20" rows="10" />
        <button type="submit">Wyślij</button>
      </FormWrapper>
    </Wrapper>
  );
};

export default Contact;
