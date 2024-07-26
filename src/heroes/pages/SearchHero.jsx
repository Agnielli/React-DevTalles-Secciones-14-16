import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { getHeroByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';
// import { heroes } from '../data/heroes';
// import { HeroCard } from "../components/HeroCard"

export const SearchHero = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName(q);

  const { searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) {
      return;
    }
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
          />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>

        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
           
          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">No hero with <b>{q}</b></div>
          
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
          

        </div>
        
      </div>
    </>
  )
}
