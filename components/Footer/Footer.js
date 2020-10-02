 const styles = {
   footer: undefined
 }

export default () => {
  const author = "Eduardo Amador Lucas"
  const linkGithub = "https://github.com/edualuc"
  return (
    <footer className={styles.footer}>
      Powered by {' '}
      <a target="_blank" href={linkGithub}>{author}</a>
    </footer>
  )
}
