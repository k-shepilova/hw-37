import React from 'react';

class Smile extends React.Component {
    render() {
        return (
            <div className="smile" onClick={() => this.props.onVote(this.props.id)}>
                <span>{this.props.symbol}</span>
                <button className="vote-btn">Vote ({this.props.votes})</button>
            </div>
        );
    }
}

export default Smile;
