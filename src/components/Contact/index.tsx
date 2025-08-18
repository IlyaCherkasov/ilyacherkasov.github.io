import { useState } from 'react';

import { motion } from 'framer-motion';

import EmailSvg from 'assets/email.svg?react';
import PhoneSvg from 'assets/phone.svg?react';
import TelegramSvg from 'assets/telegram.svg?react';
import PrimaryButton from 'components/PrimaryButton';
import Section from 'components/Section';

import styles from './styles.module.css';

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
    <Section id='contact' header='Contact Me' subheader='Get In Touch'>
      <div className={styles.container}>
        <div className={styles.contactButtons}>
          {contactData.map((contact) => (
            <motion.div
              key={contact.name}
              className={styles.contactTile}
              variants={{
                hidden: { x: -100, opacity: 0 },
                show: { x: 0, opacity: 1, transition: { duration: 1 } },
                hover: { scale: 1.2 },
              }}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              whileHover='hover'
              whileTap='hover'
            >
              {contact.icon}
              <div className={styles.tileText}>
                <h4>{contact.name}</h4>
                {contact.nickname}
              </div>
              <a href={contact.link} target='_blank' rel='noreferrer'>
                {contact.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <form className={styles.form}>
          <motion.input
            className={styles.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Enter subject of your message'
            variants={{
              hidden: { x: 100, opacity: 0 },
              show: { x: 0, opacity: 1, transition: { duration: 1 } },
              focus: { scale: 1.1 },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            whileFocus='focus'
          />
          <motion.textarea
            className={styles.input}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter your message'
            rows={5}
            variants={{
              hidden: { x: 100, opacity: 0 },
              show: { x: 0, opacity: 1, transition: { duration: 1 } },
              focus: { scale: 1.1 },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            whileFocus='focus'
          />
          <PrimaryButton
            name='Send email'
            link={`mailto:ilyakopeysk@gmail.com?subject=${subject}&body=${body}`}
            variants={{
              hidden: { y: 100, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 1 } },
              hover: { scale: 1.2 },
            }}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            whileHover='hover'
            whileTap='hover'
          />
        </form>
      </div>
    </Section>
  );
};

export default Contact;
