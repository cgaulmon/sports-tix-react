import React, {useState, useEffect} from 'react';
import EventSearchResultCard from './EventSearchResultCard';
function SearchBar() {
        const [events, setEvents] = useState([]);
        const [searchText, setSearchText] = useState("");

        function searchEvents(text) {
            setSearchText(text);
        }
        const doSearch = (evt) => {
            evt.preventDefault();
            console.log('button clicked!');
            var searchText = document.getElementById('searchText').value;
            fetch(`/api/events/name/${searchText}`)
            .then((response) => response.json())
            .then((results) => {
                setEvents(results);
            });
        };

        useEffect(() => {
            console.log("Searching Event");
        });
        return (
            <div>
            <div className='jumbotron'>
                <div className="row">
                    <div className="col-md-10 offset-md-2">
                        <form>
                            <div className="form-row">
                                <div className="col-8">
                                    <input id='searchText' className="form-control form-control-lg" type="text" placeholder="Search for tickets to an upcoming event" />
                                </div>
                                <div className="col-1">
                                    <button type="submit" onClick={doSearch} className="btn btn-lg btn-primary ">Search</button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
        <div>
            {events && events.map(event => { 
                console.log(event.name);
             return <EventSearchResultCard key={event.id} event={event}/>})}
                </div>

            </div>
        );
    }

export default SearchBar;