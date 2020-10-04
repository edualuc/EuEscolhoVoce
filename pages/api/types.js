import serviceTypes from '../../services/serviceTypes'

const fetchTypes = async (req, res) => {

  const types = await serviceTypes()

  res.statusCode = 200
  res.json({ types })
}
export default fetchTypes