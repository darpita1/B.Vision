export default function homePage() {
    return (


    // <div>
    //     <meta name="viewport" content="width=device-width, initial-scale=1">
    //     <link rel="stylesheet" href="bvisionhomepage.css"/>
    //     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>

    // </div>
    <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
        <section className="hero is-warning is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title has-text-centered is-size-1 is-family-monospace">
                  B.VISION
                </h1>
              </div>
            </div>
          </section>


        <section className="level has-background-warning is-bold">
            <div className="level-left">
                <div className="level-item">
                    
                    <div className = "dropdown is-hoverable">
                        <div className = "dropdown-trigger">
                           <button className = "button" aria-haspopup = "true" aria-controls = "dropdown-menu4">
                              <span>Select Track</span>
                              <span className = "icon is-small">
                                 <i className = "fas fa-angle-down" aria-hidden = "true"></i>
                              </span>
                           </button>
                        </div>
                        <div className = "dropdown-menu" id = "dropdown-menu" role = "menu">
                           <div className = "dropdown-content">
                              <a href = "#" className = "dropdown-item">Track 0</a>
                              <a className = "dropdown-item">Track 1</a>
                              <a href = "#" className = "dropdown-item is-active">Track 2</a>
                              <a href = "#" className = "dropdown-item">Track 3</a>
                              <a href = "#" className = "dropdown-item">Track 4</a>
                           </div>
                        </div>
                     </div>

                </div>
                   
            </div>
            <div className="level-right">
                <div className="field has-addons">
                    <p className="control">
                      <input className="input" type="text" placeholder="..."/>
                    </p>
                    <p className="control">
                      <button className="button">
                        Search
                      </button>
                    </p>
                  
                </div>
            </div>
        </section>  
        

       
        
        <div>
        <h3>vid previews</h3>

        </div>
        <div className="previews">
{/*             
            <div className="row">
                <div className="column">
                  <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                </div>
                <div className="column">
                  <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                </div>
                <div className="column">
                  <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                </div>
                <div className="column">
                  <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                </div>
                <div className="column">
                  <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                </div>
              </div> */}
        </div>

        <div><h3>vid inputs</h3></div>
        <div>
           
            {/* <div className="vidinput">
                <div className="rowv">
                    <div className="columnv">
                      <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                    </div>
                    <div className="columnv">
                      <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                    </div>
                    <div className="columnv">
                      <img src="bhangrajeet.png" alt="Mountains" style="width:100%">
                    </div>
                    <div className="columnv">
                        <img src="bhangrajeet.png" alt="Snow" style="width:100%">
                      </div>
                      <div className="columnv">
                        <img src="bhangrajeet.png" alt="Forest" style="width:100%">
                      </div>
                      <div className="columnv">
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