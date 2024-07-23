import { createContext, useState } from 'react';

export const Countercontext = createContext(null);

export const CounterProvider = (props) => {

    const [count, Setcount] = useState(0);

    return (
        <Countercontext.Provider value={{ count, Setcount }}>
            {props.children}
        </Countercontext.Provider>
    );

};