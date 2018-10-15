import SearchBar from './SearchBar';
import Logo from './Logo';

export default ({ onSearch: handleSearch }) => (
  <div>
    <div role="navigation" className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <ul className="nav navbar-nav">
              <li>
                <SearchBar onClick={handleSearch}/>
              </li>
            </ul>
          </div>
          <div className="navbar-header col-sm-6 col-md-6">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  </div>
);
