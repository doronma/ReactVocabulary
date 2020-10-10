import React from 'react';
import Words from '../data/words';

const Page1 = () => {


    const renderedWords = Words.map((word) => {

        return (
            <tr>
                <td data-label="eng">{word.eng}</td>
                <td data-label="heb">{word.heb}</td>
            </tr>

        );
    });

    return (
        <div className="ui container">
            <h1>Page 1: Show Words</h1>

            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Eng</th>
                        <th>Heb</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedWords}

                </tbody>
            </table>
        </div>
    )
}

export default Page1
