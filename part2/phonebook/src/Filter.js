const Filter = (props) => {
  return (
    <>
      <span> filter shown with </span>
      <input type='text' value={props.searchTerm} onChange={props.handleSearch} />
    </>
  )
}

export default Filter
