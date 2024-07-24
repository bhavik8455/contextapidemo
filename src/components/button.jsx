import React, { useContext } from "react";
import { Countercontext } from "../context/Counter";



const Counter = () => {

    const countercontext = useContext(Countercontext);

    return (
        <div>

            <button onClick={() => countercontext.Setcount(countercontext.count + 1)}>Increment</button>
            <button onClick={() => countercontext.Setcount(countercontext.count - 1)}>Decrement</button>

        </div>
    );

};

export default Counter;