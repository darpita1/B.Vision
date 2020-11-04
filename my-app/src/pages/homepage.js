export default function homePage() {
    return (


    // <div>
    //     <meta name="viewport" content="width=device-width, initial-scale=1">
    //     <link rel="stylesheet" href="bvisionhomepage.css"/>
    //     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>

    // </div>
    <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
        <section class="hero is-warning is-bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title has-text-centered is-size-1 is-family-monospace">
                  B.VISION
                </h1>
              </div>
            </div>
          </section>


        <section class="level has-background-warning is-bold">
            <div class="level-left">
                <div class="level-item">
                    
                    <div class = "dropdown is-hoverable">
                        <div class = "dropdown-trigger">
                           <button class = "button" aria-haspopup = "true" aria-controls = "dropdown-menu4">
                              <span>Select Track</span>
                              <span class = "icon is-small">
                                 <i class = "fas fa-angle-down" aria-hidden = "true"></i>
                              </span>
                           </button>
                        </div>
                        <div class = "dropdown-menu" id = "dropdown-menu" role = "menu">
                           <div class = "dropdown-content">
                              <a href = "#" class = "dropdown-item">Track 0</a>
                              <a class = "dropdown-item">Track 1</a>
                              <a href = "#" class = "dropdown-item is-active">Track 2</a>
                              <a href = "#" class = "dropdown-item">Track 3</a>
                              <a href = "#" class = "dropdown-item">Track 4</a>
                           </div>
                        </div>
                     </div>

                </div>
                   
            </div>
            <div class="level-right">
                <div class="field has-addons">
                    <p class="control">
                      <input class="input" type="text" placeholder="..."/>
                    </p>
                    <p class="control">
                      <button class="button">
                        Search
                      </button>
                    </p>
                  
                </div>
            </div>
        </section>  
        

       
        
        <div>
        <h3>vid previews</h3>

        </div>
        <div class="previews">
{/*             
            <div class="row">
                <div class="column">
                  <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                </div>
                <div class="column">
                  <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                </div>
                <div class="column">
                  <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                </div>
                <div class="column">
                  <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                </div>
                <div class="column">
                  <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                </div>
              </div> */}
        </div>

        <div><h3>vid inputs</h3></div>
        <div>
           
            {/* <div class="vidinput">
                <div class="rowv">
                    <div class="columnv">
                      <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                    </div>
                    <div class="columnv">
                      <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                    </div>
                    <div class="columnv">
                      <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                    </div>
                    <div class="columnv">
                        <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                      </div>
                      <div class="columnv">
                        <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                      </div>
                      <div class="columnv">
                        <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                      </div>
                  </div>
                  
            </div> */}
        </div>

        <div>
            <input type="submit" value="Submit"/>
        </div>


        </div>

    );

}