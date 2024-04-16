import React from 'react';
import SmilesList from './components/SmilesList';
import styles from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smiles: [
                { id: 1, symbol: '😀', votes: 0 },
                { id: 2, symbol: '🤣', votes: 0 },
                { id: 3, symbol: '😎', votes: 0 },
                { id: 4, symbol: '😇', votes: 0 },
                { id: 5, symbol: '😭', votes: 0 },
                { id: 6, symbol: '😡', votes: 0 },
                { id: 7, symbol: '😍', votes: 0 }
            ],
            winner: ''
        };
    }

    handleVote = (id) => {
        const updatedSmiles = this.state.smiles.map(smile => {
            if (smile.id === id) {
                return { ...smile, votes: smile.votes + 1 };
            }
            return smile;
        });
        this.setState({ smiles: updatedSmiles });
    }

    showResults = () => {
        const winner = this.state.smiles.reduce((prev, current) => {
            return (prev.votes > current.votes) ? prev : current;
        });
        this.setState({ winner: winner.symbol });
    }

    render() {
        return (
            <div className="holder">
                <SmilesList smiles={this.state.smiles} onVote={this.handleVote} />
                <button className="result-btn" onClick={this.showResults}>Show Results</button>
                {this.state.winner && <div>The winner is: {this.state.winner}</div>}
            </div>
        );
    }
}

export default App;
