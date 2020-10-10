import React, { useState, useEffect } from 'react'
import Words from '../data/words';

const Page2 = () => {

    const [wordIndex, setWordIndex] = useState(0);
    const [translation, setTranslation] = useState('');
    const [isCurrectAnswer, setIsCurrectAnswer] = useState(false)
    const [isClear, setIsClear] = useState(true)

    useEffect(() => {

    }, [])

    const clear = () => {
        console.log("clear");
        setIsClear(true);
        setIsCurrectAnswer(false);
        setTranslation('')
        setWordIndex(0);
    }

    const onNextClicked = () => {
        console.log("onNextClicked");

        setIsClear(false)
        setIsCurrectAnswer(translation === Words[wordIndex].heb)
        if (wordIndex < Words.length - 1) {
            setWordIndex(wordIndex + 1);
        } else {
            setWordIndex(0);
        }

    };

    const onFormSubmit = (event) => {
        console.log("OnFormSubmit")
        // Disable Default submit operation
        event.preventDefault();
    }

    const showResults = () => {
        if (!isClear) {
            return (
                <div className="ui raised segment">
                    Answer:  {isCurrectAnswer ? 'Correct' : 'Error'}
                </div>
            )
        } else {
            return (
                <div className="ui raised segment">
                    Please Translate Word
                </div>
            )
        }
    }


    return (
        <div className="ui grid">
            <div className="eight wide column">
                <h1>Page 2: Go Over Words</h1>
                <div className="ui form">
                    <form onSubmit={onFormSubmit} className="ui form">
                        <div className="inline field">
                            <div className="ui right pointing label">
                                Current Word:
                    </div>
                            <span> {Words[wordIndex].eng}</span>

                        </div>
                        <div className="inline field">
                            <div className="ui right pointing label">
                                Translation:
                    </div>
                            <input
                                type="text"
                                value={translation}
                                onChange={e => setTranslation(e.target.value)}
                                className="input" />
                            <span>&nbsp;</span>
                            <button
                                className="ui primary button"
                                onClick={() => onNextClicked()}>Send</button>
                            <button
                                className="ui secondary button"
                                onClick={() => clear()}>Clear</button>

                        </div>
                        {showResults()}
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Page2
