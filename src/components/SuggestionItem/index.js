// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemList, updateSearchInput} = props
  const {suggestion} = itemList
  const onClickSuggestionChange = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="li">
      <p className="para">{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onClickSuggestionChange}
        />
      </button>
    </li>
  )
}
export default SuggestionItem
