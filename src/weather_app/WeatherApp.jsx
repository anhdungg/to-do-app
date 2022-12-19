import './WeatherApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy, faSun, faCloud } from '@fortawesome/free-solid-svg-icons'

const WeatherApp = () => {
    return (
        <section className="vh-100" style={{'backgroundColor': '#C1CFEA'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{'color': '#282828'}}>
                    <div className="col-md-9 col-lg-7 col-xl-5">
                        <div className="input-group mb-3">
                            <span className="input-group-text text-primary" style={{'borderRadius': '25px 0 0 25px'}}>
                                <i className="fa fa-location-arrow"></i>
                            </span>
                            <input type="text" className="input-search form-control" 
                                style={{'borderRadius': '0 25px 25px 0px'}} placeholder='Search...'/>
                        </div>  
                        <div className="card mb-4 gradient-custom" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between mb-4 pb-2">
                                    <div>
                                        <h2 className="display-2"><strong>23°C</strong></h2>
                                        <p className="text-muted mb-0">Coimbra, Portugal</p>
                                    </div>
                                    <div>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                                            width="150px"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators mb-0">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1" ></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-secondary" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-secondary" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small"><strong>21°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>12:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>2°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>1:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>20°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>2:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>19°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>3:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>4:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small"><strong>211°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>12:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>2°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>1:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>20°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>2:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>19°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>3:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>4:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small"><strong>21°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>12:000</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>2°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>1:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>20°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>2:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>19°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>3:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>4:00</strong></p>
                                                    <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="carousel-control-prev text-secondary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next text-secondary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card mb-4" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators mb-0">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1" ></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-secondary" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-secondary" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small"><strong>21°C</strong></p>
                                                    <i className="fas fa-sun fa-2x mb-3" style={{"color": "#ddd"}}></i>
                                                    <p className="mb-0"><strong>Mon</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>20°C</strong></p>
                                                    <i className="fas fa-sun fa-2x mb-3" style={{"color": "#ddd"}}></i>
                                                    <p className="mb-0"><strong>Tue</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>16°C</strong></p>
                                                    <i className="fas fa-cloud fa-2x mb-3" style={{"color": "#ddd"}}></i>
                                                    <p className="mb-0"><strong>Wed</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>17°C</strong></p>
                                                    <i className="fas fa-cloud fa-2x mb-3" style={{"color": "#ddd"}}></i>
                                                    <p className="mb-0"><strong>Thu</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <i className="fa-duotone fa-cloud-showers-heavy fa-2x mb-3" style={{"color": "#ddd"}}></i>
                                                    <p className="mb-0"><strong>Fri</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="card" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div id="demo3" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small"><strong>21°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Mon</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>20°C</strong></p>
                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Tue</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>16°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Wed</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>17°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Thu</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Fri</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherApp;