import React from 'react';
import './App.css';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Product from './Product';
import Article from './Article';

function App() {
  return (
      <>
      <nav>
          <button type="button" onClick={()=> console.log("to the collection") }>to the collection</button>
          <button type="button" onClick={()=> console.log("shop all bags") }>shop all bags</button>
          <button type="button" onClick={()=> console.log("pre-orders") }>pre-orders</button>
      </nav>
      <h1>Handbags & Purses</h1>
          <main>
              <Product
                  label="Best seller"
                  image={bag1}
                  description="The handy bag"
                  price="€400,-"
              />
              <Product
                  label="Best seller"
                  image={bag2}
                  description="The stylish bag"
                  price="€250,-"
              />
              <Product
                  label="New collection"
                  image={bag3}
                  description="The simple bag"
                  price="€300,-"
              />
              <Product
                  label="New collection"
                  image={bag4}
                  description="The simple bag"
                  price="€150,-"
              />
          </main>

          <footer>
              <Article
                  img={brand}
                  title=""
                  description=""
              />
              <Article
                  img=""
                  title="The brand"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perspiciatis reiciendis repellendus! At commodi culpa deleniti dolorem eligendi explicabo labore, neque quae quam quasi repellat rerum sequi similique velit vero!"
              />
          </footer>
          <footer>
              <Article
                  img=""
                  title="Our brand"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum perspiciatis reiciendis repellendus! At commodi culpa deleniti dolorem eligendi explicabo labore, neque quae quam quasi repellat rerum sequi similique velit vero!"
              />
              <Article
                  img={our_story}
                  title=""
                  description=""
              />
          </footer>
      </>
  );
}

export default App;



