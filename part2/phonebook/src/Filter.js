const Filter = (props) => {
  return (
    <>
      filter shown with
      <input type='text' value={props.searchTerm} onChange={props.handleSearch} />
    </>
  )
}

export default Filter
