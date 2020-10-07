const serviceTypes = async () => {
  // const response = await fetch("https://pokeapi.co/api/v2/type")
  // const typesResponse = await response.json()
  // const types = typesResponse && typesResponse.results &&  typesResponse.results.map(type => ({
  //   ...type,
  //   link: `/${type.name}`
  // }))

  const types = getAllTypes().filter(type => (type.name))
  console.log(types);

  return types
}

let getAllTypes = () => ([
  {
    type: "normal",
    name: null,
    path: "/normal",
  }, 
  {
    type: "fighting",
    name: null,
    path: "/fighting",
  }, 
  {
    type: "flying",
    name: null,
    path: "/flying",
  }, 
  {
    type: "poison",
    name: null,
    path: "/poison",
  }, 
  {
    type: "ground",
    name: null,
    path: "/ground",
  }, 
  {
    type: "rock",
    name: null,
    path: "/rock",
  }, 
  {
    type: "bug",
    name: "Inseto",
    path: "/bug",
  }, 
  {
    type: "ghost",
    name: null,
    path: "/ghost",
  }, 
  {
    type: "steel",
    name: null,
    path: "/steel",
  }, 
  {
    type: "fire",
    name: "Fogo",
    path: "/fire",
  }, 
  {
    type: "water",
    name: "Água",
    path: "/water",
  }, 
  {
    type: "grass",
    name: null,
    path: "/grass",
  }, 
  {
    type: "electric",
    name: null,
    path: "/electric",
  }, 
  {
    type: "psychic",
    name: null,
    path: "/psychic",
  }, 
  {
    type: "ice",
    name: null,
    path: "/ice",
  }, 
  {
    type: "dragon",
    name: null,
    path: "/dragon",
  }, 
  {
    type: "dark",
    name: null,
    path: "/dark",
  }, 
  {
    type: "fairy",
    name: null,
    path: "/fairy",
  }, 
  {
    type: "unknown",
    name: null,
    path: "/unknown",
  }, 
  {
    type: "shadow",
    name: null,
    path: "/shadow",
  },
])

export default serviceTypes