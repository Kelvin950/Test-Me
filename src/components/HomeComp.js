import messi  from '../assets/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg'
import  music from '../assets/axel-antas-bergkvist-UOGFqFfUD0A-unsplash.jpg';
import movie from '../assets/serge-kutuzov-meqVd5zwylI-unsplash.jpg';
import books  from '../assets/shayna-douglas-TQV8qkwuEzA-unsplash.jpg';

import Main from './main/Main';
import ImageComponent from './imgcomponents/ImageComponent'
function HomeComp() {
    return ( 


          <Main>
          <div className="row">
              <div className="col-md-6">
              <ImageComponent  srcName = {messi} dataCategory ="21" name="SPORT" />
                <ImageComponent srcName={music} dataCategory="12"  name="Music"/>
               

              </div>

              <div className="col-md-6">
              <ImageComponent srcName={books}  dataCategory="10" name="BOOKS"/>
               
              <ImageComponent srcName={movie}  dataCategory="11" name="MOVIES"/>
              
              </div>

          </div>
</Main>
     );
}

export default HomeComp;