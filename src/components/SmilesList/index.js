import React from 'react';
import Smile from '../../components/Smile';

class SmilesList extends React.Component {
    render() {
        return (
            <div className="smiles">
                {this.props.smiles.map(smile => (
                    <Smile key={smile.id} id={smile.id} symbol={smile.symbol} votes={smile.votes} onVote={this.props.onVote} />
                ))}
            </div>
        );
    }
}

export default SmilesList;
