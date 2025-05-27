import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecast.css'
const week_days = ['Monday:(', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday:)']


const forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecast_days = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek));
    return (
        <>
            <label className="title">FORECAST</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-items">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecast_days[idx]}</label>
                                    <label className="desc">{item.weather[0].description}</label>
                                    <label className="min-max">{item.main.temp_min}°C - {item.main.temp_max}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details">
                                <div className="daily-details-item">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humudity}%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Wind Speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} meters</label>
                                </div>
                                

                            </div>

                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                <AccordionItem></AccordionItem>
            </Accordion>
        </>
    );
}
export default forecast