import './WeatherApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy, faSun,
     faCloud, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const WeatherApp = () => {
    const apiKey = 'nyAOk4NQrrLkMG15wSeqUl4IwPC7xKQh';
    // const apiKeyBak = 'BaUeEiQLPpOjdJxs8GeKnUxsC7X8ANPw';
    const apiLocation = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const apiTemperature5Day = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const apiTemperature12Hour = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/';
    const apiTemperatureNow = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const [inputSearch, setInputSearch] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [isHiddenResult, setIsHiddenResult] = useState(true);
    const [isNoResult, setIsNoResult] = useState(true);
    const [nameCity, setNameCity] = useState('Hà Nội');
    const [locationKey, setLocationKey] = useState('353412');
    const [temperature5Day, setTemperature5Day] = useState([]);
    const [temperature12Hour, setTemperature12Hour] = useState([]);
    const [temperatureNow, setTemperatureNow] = useState({temperature: '--',});

    useEffect(() => {
        getTemperatureNow();
        getTemperature5Day();
        getTemperature12Hour();
    }, [])

    const doSearch = (value) => {
        setInputSearch(value);
        let param = `?apikey=${apiKey}&q=${value}&language=vi`;
        fetch(apiLocation + param)
        .then(result => {
             return result.json();
        })
        .then(result => {
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
                setResultSearch([...[{name: `Không tìm thấy kết quả với từ khoá '${value}'`}]]);
            }
        })
    }

    const selectName = () => {
        let allResult = document.getElementsByClassName('item-auto-complete');
        if (allResult !== undefined && allResult.length > 0) {
            [].forEach.call(allResult, (e) => {
                if (e !== undefined && getComputedStyle(e).backgroundColor === 'rgb(196, 196, 196)') {
                    let name = e.innerText;
                    if (name !== undefined && name !== '') {
                        setInputSearch(name);
                        setNameCity(name);
                        resultSearch.forEach((item) => {
                            if (item.LocalizedName === name) {
                                setLocationKey(item.Key);
                            }
                        });
                        callAPI();
                    }
                }
            })
        }
        setIsHiddenResult(true);
    }

    const callAPI = () => {
        const interval = setInterval(() => {
            getTemperatureNow();
            getTemperature5Day();
            getTemperature12Hour();
        }, 1000 * 60 * 60)
    }
    const getTemperatureNow = () => {
        let param = `?apikey=${apiKey}&language=vi`;
        fetch(apiTemperatureNow + locationKey + param)
        .then(res => {
            return res.json();
        })
        .then(result => {
            setTemperatureNow({
                temperature: result[0].Temperature.Metric.Value,
                weatherText: result[0].WeatherText,
                hasPrecipitation: result[0].HasPrecipitation,
                isDayTime: result[0].IsDayTime
            });
        },
        (error) => {
            setTemperatureNow({
                temperature: '--',
                weatherText: '--',
                hasPrecipitation: false,
                isDayTime: false
            });
        })
    }

    const getTemperature5Day = () => {
        let param = `?apikey=${apiKey}&language=vi`;
        fetch(apiTemperature5Day + locationKey + param)
        .then(result => {
             return result.json();
        })
        .then(result => {
            setTemperature5Day(...[result.DailyForecasts]);
        },
        (error) => {
            setTemperature5Day([...[]]);
        })
    }

    const getTemperature12Hour = () => {
        let param = `?apikey=${apiKey}&language=vi`;
        fetch(apiTemperature12Hour + locationKey + param)
        .then(result => {
             return result.json();
        })
        .then(result => {
            if (result.length !== 0) {
                let arrTemp = [];
                let temp = []
                for (let i=0; i<result.length; i++) {
                    arrTemp.push(result[i]);
                    if (i%4 === 3) {
                        temp.push(arrTemp);
                        arrTemp = [];
                    }
                }
                setTemperature12Hour(...[temp]);
            } else {
                setTemperature12Hour([...[]]);
            }
        },
        (error) => {
            setTemperature12Hour([...[]]);
        })
    }

    const convertFToC = (value) => {
        return Math.round((value - 32) * 5 / 9);
    }

    const convertToDay = (value) => {
        let date = new Date(value);
        switch(date.getDay()) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tus';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            default:
                return 'Unknown';
        }
    }

    const convertToHour = (value) => {
        return new Date(value).getHours();
    }

    const convertToStatusWeather = (value) => {
        if (value < 6 || value === 14 || value === 17 || value === 21 || value === 30) {
            return 1;
        } else if (value === 6 || value === 7 || value === 8 || value === 11 || value === 16 || value === 20 || value === 23 || value === 31) {
            return 2
        }
        return 3;
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
                                                        <span className={isNoResult ? "item-auto-no-result" : "item-auto-complete"}>{item.LocalizedName}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <div className={temperatureNow.hasPrecipitation ? 'card mb-4 background-heavy' : 'card mb-4 background-sun'} style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between mb-4 pb-2">
                                    <div>
                                        <h2 className="display-2"><strong>{temperatureNow.temperature}°C</strong></h2>
                                        <p className="text-muted mb-0">{nameCity}</p>
                                    </div>
                                    <div>
                                        {
                                            temperatureNow.hasPrecipitation ?
                                                <FontAwesomeIcon icon={faCloudShowersHeavy} size='6x' className='me-4' style={{"color": "#7e7d7b"}} />
                                            :
                                                <FontAwesomeIcon icon={faSun} size='6x' className='me-4' style={{"color": "#dfc5a2"}} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                {
                                    temperature12Hour.length === 0 ?
                                        <div id="demo3" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                        <div className="flex-column">
                                                            <p className="mb-0"><strong>Không có dữ liệu</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators mb-0">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1" ></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="bg-secondary" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="bg-secondary" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                {
                                                    temperature12Hour.map((item, index) => (
                                                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                                {
                                                                    item.map((item, index) => (
                                                                        <div className="flex-column" key={index}>
                                                                            <p className="small"><strong>{convertFToC(item.Temperature.Value)}°C</strong></p>
                                                                            {
                                                                                item.HasPrecipitation ?
                                                                                    <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                                                :
                                                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                                            }
                                                                            <p className="mb-0"><strong>
                                                                                {
                                                                                    convertToHour(item.DateTime) > 12 ?
                                                                                        convertToHour(item.DateTime)-12
                                                                                    :
                                                                                        convertToHour(item.DateTime)
                                                                                }:00</strong></p>
                                                                            <p className="mb-0 text-muted" style={{"fontSize": ".65rem"}}>
                                                                                {convertToHour(item.DateTime) > 12 ? 'PM' : 'AM'}
                                                                            </p>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    ))  
                                                }
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
                                }
                                
                            </div>
                        </div>

                        <div className="card" style={{"borderRadius": "25px"}}>
                            <div className="card-body p-4">
                                <div id="demo3" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                                                {
                                                    temperature5Day.length === 0 ?
                                                        <div className="flex-column">
                                                            <p className="mb-0"><strong>Không có dữ liệu</strong></p>
                                                        </div>
                                                    :
                                                        temperature5Day.map((item, index) => (
                                                            <div key={index} className="flex-column">
                                                                <p className="small">
                                                                    <strong>
                                                                        {convertFToC(item.Temperature.Minimum.Value) + '-' + convertFToC(item.Temperature.Maximum.Value) + '°C'}
                                                                    </strong>
                                                                </p>
                                                                {
                                                                    convertToStatusWeather(item.Day.Icon) === 1 ?
                                                                    <FontAwesomeIcon icon={faSun} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                                    : 
                                                                        convertToStatusWeather(item.Day.Icon) === 2 ?
                                                                            <FontAwesomeIcon icon={faCloud} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                                        :
                                                                            <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' className='mb-3' style={{"color": "#ddd"}} />
                                                                }
                                                                <p className="mb-0"><strong>{convertToDay(item.Date)}</strong></p>    
                                                            </div>
                                                        ))
                                                }
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