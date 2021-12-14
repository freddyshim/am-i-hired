import Image from 'next/image'
import styles from '@styles/components/ContactItem.module.scss'
import GitHub from '@public/github.png'
import LinkedIn from '@public/linkedin.png'
import Website from '@public/website.png'

type ContactType = 'github' | 'linkedin' | 'personal'

interface ContactItemProps {
  type: ContactType
}

const ContactItem = ({ type }: ContactItemProps) => {
  let src: string, link: string, alt: string, description: string
  switch (type) {
    case 'github':
      src = GitHub.src
      link = 'https://github.com/freddyshim'
      alt = 'GitHub link'
      description = 'GitHub'
      break
    case 'linkedin':
      src = LinkedIn.src
      link = 'https://linkedin.com/in/freddy-shim'
      alt = 'LinkedIn link'
      description = 'LinkedIn'
      break
    default:
      src = Website.src
      link = 'https://freddyshim.com'
      alt = 'personal site link'
      description = 'Personal'
  }

  return (
    <div className={styles.item}>
      <a
        className={styles.item__link}
        href={link}
        target="_blank"
        rel="noopener"
      >
        <Image src={src} alt={alt} width="100%" height="100%" />
      </a>
      <h3 className={styles.item__description}>{description}</h3>
    </div>
  )
}

export default ContactItem
