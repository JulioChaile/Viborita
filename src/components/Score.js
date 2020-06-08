import React from 'react';
import '../App.css'

export class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: []
        }
    }

    componentWillReceiveProps() {
        if(!this.props.check || !this.props.name){return}

        let score = this.state.score.slice()

        score.unshift({
            name: this.props.name,
            finalScore: this.props.finalScore
        })

        score = score.sort((a, b) => b.finalScore - a.finalScore)

        this.setState({
            score: score
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td 
                            align='center'
                            colSpan='2'
                        >
                            Score Table
                        </td>
                    </tr>
                    <tr>
                        <td>Names</td>
                        <td>Scores</td>
                    </tr>
                    {this.state.score.map((score) =>
                        <tr>
                            <td>{score.name}</td>
                            <td>{score.finalScore}</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}