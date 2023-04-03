/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeInputElement = event =>
    this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search"
                onChange={this.onChangeInputElement}
                value={searchInput}
                placeholder="Google search"
              />
            </div>
            <ul className="ul">
              {searchResults.map(each => (
                <SuggestionItem
                  itemList={each}
                  key={each.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
