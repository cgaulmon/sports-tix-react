import React from 'react';
class EventSearchResultCard extends React.Component {

    constructor(props) {
        super(props);
        this.event = this.props.event;
    }

    render() {


        const renderTicketButton = (endDate) => {
            endDate  = new Date(endDate);
            console.log("endDate", endDate);
            if(endDate >= new Date()) {
                return (<button className="btn btn-success">Get Tickets</button>)
            } else {
                return (<button className="btn btn-outline-secondary" disabled="disabled">Unavailable</button>)
            }
        }
        return (
           <div className="container">
            <div className="card mb-2">
                <div className="card-header">
                    <h4 className="text-primary card-title">{this.event.name}</h4>
                    
                </div>
                <div className="card-body">
                <div>
                      <dl>
                          <dt>Description</dt>
                          <dd>{this.event.description}</dd>
                          <dt>Date</dt>
                          <dd>{this.event.startDate === this.event.endDate ? this.event.startDate : `${this.event.startDate} - ${this.event.endDate}`} </dd>
                          <dt>Time</dt>
                          <dd>{this.event.time}</dd>
                          
                      </dl>

                      { renderTicketButton(this.event.endDate) }

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default EventSearchResultCard;