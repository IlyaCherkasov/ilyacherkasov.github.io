import { useState } from 'react';
import styled, { css } from 'styled-components';
import Section from 'components/Section';
import { ReactComponent as EmailSvg } from 'assets/email.svg';
import { ReactComponent as PhoneSvg } from 'assets/phone.svg';
import { ReactComponent as TelegramSvg } from 'assets/telegram.svg';
import PrimaryButton from './PrimaryButton';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem 8rem;
  max-width: 52rem;
  margin: auto;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

const ContactTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.purple}90;
  border: 1px solid ${({ theme }) => theme.colors.purple}90;
  border-radius: 1rem;

  :hover {
    background: none;
  }
`;

const TileText = styled.div`
  color: ${({ theme }) => theme.colors.text}60;

  h4 {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
  }
`;

const InputStyles = css`
  width: calc(100% - 2rem);
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-family: inherit;
  line-height: 2rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
`;

const Input = styled.input`
  ${InputStyles}
`;

const TextArea = styled.textarea`
  ${InputStyles}
`;

const contactData = [
  {
    icon: <EmailSvg />,
    name: 'Email',
    nickname: 'ilyakopeysk@gmail.com',
    link: 'mailto:ilyakopeysk@gmail.com',
    cta: 'Send an email',
  },
  {
    icon: <PhoneSvg />,
    name: 'Phone',
    nickname: '+7 (951) 469-82-60',
    link: 'tel:+79514698260',
    cta: 'Call',
  },
  {
    icon: <TelegramSvg />,
    name: 'Telegram',
    nickname: 'cherkasik',
    link: 'https://t.me/cherkasik',
    cta: 'Send a message',
  },
];

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  return (
    <Section id="contact" header="Contact Me" subheader="Get In Touch">
      <Container>
        <ContactButtons>
          {contactData.map((contact) => (
            <ContactTile key={contact.name}>
              {contact.icon}
              <TileText>
                <h4>{contact.name}</h4>
                {contact.nickname}
              </TileText>
              <a href={contact.link} target="_blank" rel="noreferrer">
                {contact.cta}
              </a>
            </ContactTile>
          ))}
        </ContactButtons>
        <Form>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject of your message"
          />
          <TextArea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter your message"
            rows={5}
          />
          <PrimaryButton name="Send email" link={`mailto:ilyakopeysk@gmail.com?subject=${subject}&body=${body}`} />
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
