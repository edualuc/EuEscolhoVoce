import Link from 'next/link'

const styles = {
  title: undefined
}

const ChoiceType = ({title, types}) => (
  <>
    <h1 className={styles.title}>
      {title}
    </h1>

    <ul>
      {types && types.map(type => <li key={type.name}><Link href={type.link}>{type.name}</Link></li>)}
    </ul>
  </>
)
export default ChoiceType