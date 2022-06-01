const AutocompleteItem = (props) => {

  const handleClick = () => {
    props.handlerSearch({
      lat: props.lat,
      lng: props.lon,
      url: props.url
    })
  }

  return (
    <li className='result' onClick={handleClick}>
      <p>{props.country}, {props.name}</p>
    </li>
  )
}

export default AutocompleteItem