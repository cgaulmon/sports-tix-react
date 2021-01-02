import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const doSearch = (evt) => {
            evt.preventDefault();
            console.log('button clicked!');
        };
        return (
            <div className='jumbotron'>
                <div className="row">
                    <div className="col-md-10 offset-md-2">
                        <form>
                            <div class="form-row">
                                <div className="col-8">
                                    <input className="form-control form-control-lg" type="text" placeholder="Search for tickets to an upcoming event" />
                                </div>
                                <div className="col-1">
                                    <button type="submit" onClick={doSearch} className="btn btn-lg btn-primary ">Search</button>
                                </div>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        );
    }

}


export default SearchBar;