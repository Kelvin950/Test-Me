import messi  from '../assets/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg'
import  music from '../assets/axel-antas-bergkvist-UOGFqFfUD0A-unsplash.jpg';
import movie from '../assets/serge-kutuzov-meqVd5zwylI-unsplash.jpg';
import books  from '../assets/shayna-douglas-TQV8qkwuEzA-unsplash.jpg';
import classes from './Home.module.css';
import Main from './main/Main';
function HomeComp() {
    return ( 


          <Main>
          <div className="row">
              <div className="col-md-6">
                 <figure>
                 <img src={messi} className={classes.img} data-category="21" data-src="0" alt="sport"/> 
                <figcaption className={classes.figcaption}>SPORT</figcaption>
                </figure>
                 <figure>
                 <img src={music} data-category="12" className={classes.img} data-src="1" alt="music"/>
                 <figcaption className={classes.figcaption}>MUSIC</figcaption>
                </figure>

              </div>

              <div className="col-md-6">
                <figure>
                  <img src={books} data-category="10"   data-src="2" className={classes.img} alt="books"/>
                  <figcaption className={classes.figcaption}>BOOKS</figcaption>
                </figure>
                <figure>
                  <img src={movie}  data-category="11" data-src="3"  className={classes.img}  alt="music"/>
                  <figcaption className={classes.figcaption}>MOVIES</figcaption>
                </figure>
              </div>

          </div>
</Main>
     );
}

export default HomeComp;