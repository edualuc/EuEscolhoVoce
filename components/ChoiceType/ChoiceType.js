import Link from 'next/link'

const styles = {
  title: undefined
}

export default ({title, types}) => (
  <>
    <h1 className={styles.title}>
      {title}
    </h1>

    <ul>
      {types && types.map(type => <li><Link href={type.link}>{type.name}</Link></li>)}
    </ul>
  </>
)