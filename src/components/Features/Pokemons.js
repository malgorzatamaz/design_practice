import React, { useEffect, useState } from "react"

import axios from "axios"

/** Downloads pokemon and it's default ability */
const Pokemons = () => {
  const [ability, setAbility] = useState("")
  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  useEffect(() => {
    getData()
    setTimeout(() => {
      source.cancel("testing cancelling")
    }, 1000)
  })

  const getData = async () => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/1/`, {
        cancelToken: source.token
      })
      .catch(function(thrown) {
        if (axios.isCancel(thrown)) {
          setErrorMessage("Cancelled request")
        }
      })

    if (!response) return

    const abilityUrl = response.data.abilities[0].ability.url
    const abilityObject = await axios.get(abilityUrl)
    setAbility(abilityObject.data.name)
    setName(response.data.name)
  }

  if (errorMessage) return <div>{errorMessage}</div>

  return <div>{name && ability && `${name} has ability to use ${ability}`}</div>
}

export default Pokemons
