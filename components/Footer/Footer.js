 const styles = {
   footer: undefined
 }

const Footer = () => {
  const author = "Eduardo Amador Lucas"
  const linkGithub = "https://github.com/edualuc"
  return (
    <footer>
      Powered by {' '}
      <a target="_blank" href={linkGithub}>{author}</a>
    </footer>
  )
}
export default Footer