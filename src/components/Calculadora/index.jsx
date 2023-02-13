//React
import React from 'react';
import { useState } from 'react';

//Components
import { Button } from '../Button';
import { Display } from '../Display';

export const Calculator = () => {
    const [value, setValue] = useState('0');
    const [resutl, setResult] = useState(0);

    const handleClick = (buttonValue) => {
        if (buttonValue === '=') {
            setResult(eval(value));
            setValue(eval(value).toString());
        } else if (buttonValue === 'C') {
            setValue();
            setResult(0);
        } else {
            setValue((value === "0") ? buttonValue : value + buttonValue);
        }
    }

    const handleKeyPress = (event) => {
        const { key } = event;
        if (!isNaN(key) || /[\/\+\-\*\.]/.test(key)) {
            handleClick(key);
        }else if (key === 'Backspace' || key === 'Delete') {
            if (key === 'Backspace') {
                setValue(value.slice(0, value.length - 1));
            } else if (key === 'Delete') {
                setValue('0');
                setResult(0);
            }
        }

        if (event.key === "Enter" || event.key === "=") {
          handleClick("=");
        }
    };

    return (
        <div className="calculator" onKeyDown={handleKeyPress} tabIndex={0}>
            <Display className="display" value={value} />

            <div className="buttons">
                <Button value="%" className="button" onClick={() => handleClick('%')} />
                <Button value="/" className="button" onClick={() => handleClick('/')} />
                <Button value="C" className="button" onClick={() => setValue('0')} />
                <Button value="+" className="button" onClick={() => handleClick('+')} />
                <Button value="-" className="button" onClick={() => handleClick('-')} />
                <Button value="*" className="button" onClick={() => handleClick('*')} />
                <Button value="7" className="button" onClick={() => handleClick('7')} />
                <Button value="8" className="button" onClick={() => handleClick('8')} />
                <Button value="9" className="button" onClick={() => handleClick('9')} />
                <Button value="4" className="button" onClick={() => handleClick('4')} />
                <Button value="5" className="button" onClick={() => handleClick('5')} />
                <Button value="6" className="button" onClick={() => handleClick('6')} />
                <Button value="1" className="button" onClick={() => handleClick('1')} />
                <Button value="2" className="button" onClick={() => handleClick('2')} />
                <Button value="3" className="button" onClick={() => handleClick('3')} />
                <Button value="," className="button" onClick={() => handleClick('.')} />
                <Button value="0" className="button" onClick={() => handleClick('0')} />
                <Button value="=" className="button" onClick={() => handleClick('=')} />
            </div>
        </div>
    )
}


