import './WeatherApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy, faSun,
     faCloud, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const WeatherApp = () => {
    const apiKey = 'BaUeEiQLPpOjdJxs8GeKnUxsC7X8ANPw';
    const api = 'https://dataservice.accuweather.com/locations/v1/cities/search/'
    const [inputSearch, setInputSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    const [isHiddenResult, setIsHiddenResult] = useState(true)
    const [nameSelect, setNameSelect] = useState('')
    const [isNoResult, setIsNoResult] = useState(true)

    useEffect(() => {
    }, [])

    const doSearch = (value) => {
        setInputSearch(value);
        let param = `?apikey=${apiKey}=${value}&language=vi`
        fetch(api + param)
        .then(res => res.json())
        .then((result) => {
            if (result.length === 0 && value !== '') {
                result.push({name: `Không tìm thấy kết quả với từ khoá '${value}'`});
                setIsNoResult(true);
            } else {
                setIsNoResult(false);
            }
            setResultSearch([...result]);
        },
        (error) => {
            if (value !== '') {
                setIsNoResult(true);
                setResultSearch([...[{name: `Không tìm thấy kết quả với từ khoá '${value}'`}]])
            }
        })
    }

    const selectName = () => {
        let allResult = document.getElementsByClassName('item-auto-complete');
        if (allResult !== undefined && allResult.length > 0) {
            [].forEach.call(allResult, (e) => {
                if (e !== undefined && getComputedStyle(e).backgroundColor === 'rgb(196, 196, 196)') {
                    let name = e.innerText
                    if (name !== undefined && name !== '') {
                        setInputSearch(name);
                    }
                }
                
            })
        }
        setIsHiddenResult(true);
    }

    const doFocusInputSearch = () => {
        if (inputSearch !== '') {
            doSearch(inputSearch);
        }
        setIsHiddenResult(false);
    }



    return (
        <section className="vh-100" style={{'backgroundColor': '#C1CFEA'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" style={{'color': '#282828'}}>
                    <div className="col-md-9 col-lg-7 col-xl-5">
                            <div className="input-group mb-3">
                                <span className="input-group-text text-secondary" style={{'borderRadius': '25px 0 0 25px'}}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </span>
                                <div style={{'position': 'relative', 'flex': '1 1 auto'}}>
                                    <input type="text" className="input-search form-control" value={inputSearch}
                                        style={{'borderRadius': '0 25px 25px 0px'}} onChange={(e) => {doSearch(e.target.value)}}
                                        onFocus={() => {doFocusInputSearch()}} onBlur={() => {selectName()}} placeholder='Search...'/>
                                    <div className='auto-complete' style={isHiddenResult ? {'display': 'none'} : {'display': 'block'}} id='test'>
                                        <ul className="menu-auto-complete">
                                            {
                                                resultSearch.map((item, index) => (
                                                    <li key={index}>
                                                        <span className={isNoResult ? "item-auto-no-result" : "item-auto-complete"}>{item.name}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
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

                                    <div className="carousel-control-prev text-secondary" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </div>
                                    <div className="carousel-control-next text-secondary" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Sat</strong></p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small"><strong>18°C</strong></p>
                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                    <p className="mb-0"><strong>Sun</strong></p>
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