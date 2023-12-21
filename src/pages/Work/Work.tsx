import './Work.scss'
import MovieList from '../../assets/movie.jpg'

const Work = () => {
  return (
    <section className="work_container">
      <h1>Projects</h1>
      <section className="work_wrapper">
        <div className="work_card">
          <img src={MovieList} alt="movie-list" className="work_image" />
          <div className="work_captions">
            <div className="work_text">
              <h1>MovieReel Database</h1>
              <p>
                A movie database to add movies to your watchlist, review them
                and get external reviews
              </p>
            </div>
          </div>
        </div>
        <div className="work_card">
          <img src={MovieList} alt="movie-list" className="work_image" />
          <div className="work_captions">
            <div className="work_text">
              <h1>ShoppingList App</h1>
              <p>
                A shopping list application that lets you add items, quantity
                and description and review them.
              </p>
            </div>
          </div>
        </div>
        <div className="work_card">
          <img src={MovieList} alt="movie-list" className="work_image" />
          <div className="work_captions">
            <div className="work_text">
              <h1>ShoppingList App</h1>
              <p>
                A shopping list application that lets you add items, quantity
                and description and review them.
              </p>
            </div>
          </div>
        </div>
        <div className="work_card">
          <img src={MovieList} alt="movie-list" className="work_image" />
          <div className="work_captions">
            <div className="work_text">
              <h1>ShoppingList App</h1>
              <p>
                A shopping list application that lets you add items, quantity
                and description and review them.
              </p>
            </div>
          </div>
        </div>
        <div className="work_card">
          <img src={MovieList} alt="movie-list" className="work_image" />
          <div className="work_captions">
            <div className="work_text">
              <h1>ShoppingList App</h1>
              <p>
                A shopping list application that lets you add items, quantity
                and description and review them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Work