const serviceTypes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/type")
  const typesResponse = await response.json()
  const types = typesResponse && typesResponse.results &&  typesResponse.results.map(type => ({
    ...type,
    link: `/${type.name}`
  }))
  return types
}
export default serviceTypes