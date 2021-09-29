import styles from '@styles/components/ContactItem.module.scss'
import GitHub from '@public/github.png'
import LinkedIn from '@public/linkedin.png'
import Website from '@public/website.png'

type ContactType = 'github' | 'linkedin' | 'personal'

interface ContactItemProps {
  type: ContactType
}

const ContactItem = ({ type }: ContactItemProps) => {
  const renderImage = () => {
    let src = ''
    let link = ''
    switch (type) {
      case 'github':
        src = GitHub.src
        link = 'https://github.com/freddyshim'
        break
      case 'linkedin':
        src = LinkedIn.src
        link = 'https://linkedin.com/in/freddy-shim'
        break
      default:
        src = Website.src
        link = 'https://freddyshim.com'
    }

    return (
      <a className={styles.link} href={link} target="_blank">
        <img className={styles.logo} src={src} />
      </a>
    )
  }

  return <div className={styles.container}>{renderImage()}</div>
}

export default ContactItem
