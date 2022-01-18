import React from "react";
import WithSearchForUsers from '../hocs/WithSearchForUsers'


const SearchBar = ({searchForUsers}) => {
  // dynamicSearch = () => {
  //     this.setState({searchTerm: e.target.value})
  // }

  return (
    <div className="searchbar">
      <input type="search" placeholder="Rechercher" onKeyUp={searchForUsers} />
    </div>
  );
};

export default WithSearchForUsers(SearchBar);
