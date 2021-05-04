import React from 'react';

class SearchBar extends React.Component {
   state = { searchTerm: '' };

   handleChange = (event) => {
      this.setState({ searchTerm: event.target.value });
   };

   handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.handleSearchTermSubmit(this.state.searchTerm);
   };

   render() {
      return (
         <div className="search-bar ui segment">
            <form onSubmit={this.handleFormSubmit} className="ui form">
               <div className="field">
                  <label>video Search</label>
                  <input
                     text="text"
                     value={this.state.searchTerm}
                     onChange={this.handleChange}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
