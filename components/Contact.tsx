import ContactItem from '@components/ContactItem'
import styles from '@styles/components/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <ContactItem type="github" />
      <ContactItem type="linkedin" />
      <ContactItem type="personal" />
    </div>
  )
}

export default Contact
