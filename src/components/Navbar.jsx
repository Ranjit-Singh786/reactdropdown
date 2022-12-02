import React, { useState } from "react";
import logo from "/assets/logo.png";
import "../components/css/nav.css";

export default function Navbar() {
  const [state, setState] = useState(false);
  console.log(state);
  

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={()=>(setState(false))}
                   
                  >
                    home
                  </a>
                  <ul className="dropdown-menu">
                    <div className="row menu-row">
                      <div className="col-md-8 col-lg-8 col-xl-8">
                        <div className="inner-wrapper">
                          <div className="row inner-row">
                            <div className="col-md-5 col-lg-5 col-xl-5">
                              <div className="menu-box">
                                <ul className="menu-list">
                                  <li className={!state?"active":""}>
                                    <a href=""  id="mobile"  onMouseOver={(e)=>setState(e.target)} onMouseOut={()=>setState(false)}>mobile app development</a>
                                  </li>

                                  <li>
                                    <a href="" id="web" onMouseOver={(e)=>setState(e.target)} >web & CMS development</a>
                                  </li>

                                  <li>
                                    <a href="" id="ecom" onMouseOver={(e)=>setState(e.target)} >ecommerce development</a>
                                  </li>

                                  <li>
                                    <a href="" id="crm" onMouseOver={(e)=>setState(e.target)} >CRM software</a>
                                  </li>

                                  <li>
                                    <a href="" id="dynamic" onMouseOver={(e)=>setState(e.target)} >dynamic websites</a>
                                  </li>

                                  <li>
                                    <a href="" id="mlm" onMouseOver={(e)=>setState(e.target)} >MLM mobile app</a>
                                  </li>

                                  <li>
                                    <a href="" id="database" onMouseOver={(e)=>setState(e.target)} >database security</a>
                                  </li>

                                  <li>
                                    <a href="" id="server" onMouseOver={(e)=>setState(e.target)} >server security</a>
                                  </li>
                                </ul>
                              </div>
                              {/**menu-box**/}
                            </div>
                            {/**col-md-5 col-lg-5 col-xl-5**/}
                             {(state.id=="mobile" || !state)?
                            <div className="col-md-4 col-lg-4 col-md-4" >
                              <div className="menu-page">
                                <ul className="page-list">
                                  <li>
                                    <a href="">android app</a>
                                  </li>

                                  <li>
                                    <a href="">iphone app</a>
                                  </li>

                                  <li>
                                    <a href="">hybrid app</a>
                                  </li>

                                  <li>
                                    <a href="">flutter</a>
                                  </li>
                                  <li>
                                    <a href="">react native</a>
                                  </li>

                                  <li>
                                    <a href="">kotlin</a>
                                  </li>

                                  <li>
                                    <a href="">ionic</a>
                                  </li>

                                  <li>
                                    <a href="">swift</a>
                                  </li>

                                  <li>
                                    <a href="">xamarin</a>
                                  </li>
                                </ul>
                                </div>{/**menu-page**/}
                              </div>
                            :<></>}
                            {(state.id=="web")?
                            <div className="col-md-4 col-lg-4 col-md-4" >
                              <div className="menu-page">
                                <ul className="page-list">
                                  <li>
                                    <a href="">PHp</a>
                                  </li>

                                  <li>
                                    <a href="">wordpress</a>
                                  </li>

                                  <li>
                                    <a href="">javascript</a>
                                  </li>

                                  
                                </ul>
                                </div>{/**menu-page**/}
                              </div>
:null}
                              {/**col-md-4 col-lg-4 col-md-4**/}

                          </div>
                          {/**row inner-row**/}
                        </div>
                      </div>
                      {/**inner-wrapper**/}
                      {/**col-md-8 col-lg-8 col-xl-8**/}
                    </div>
                    {/**row**/}
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    blog
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    blockchain
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    contact us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <button type="button" className="btn btn-primary">
                    get started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/**head**/}
    </div>
  );
}