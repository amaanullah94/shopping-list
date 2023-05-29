import React, { useRef, useState } from 'react';

const Shopping = () => {
    const initialValue = useRef('');
    const [itemsList, setItemsList] = useState([]);

    const click = (e) => {
        e.preventDefault();
        const newItem = initialValue.current.value;
        setItemsList([...itemsList, newItem]);
        initialValue.current.value = '';
    };

    const clear = (index) => {
        const updatedItems = [];
        updatedItems.splice(index, 1);
        setItemsList(updatedItems);
    };



    

    return (
        <>
            <h2>Project 4: Shopping List</h2>

            <div className="main-container">
                <form>
                    <h4>Items to buy</h4>
                    <input
                        className="input"
                        name="myInput"
                        type="text"
                        placeholder="add items here"
                        required
                        ref={initialValue}
                    />
                    <button onClick={click} className="btn">
                        Add
                    </button>
                    <h2>Items:</h2>
                    <div>
                        <ul>
                            {itemsList.map((item, index) => (
                                <li key={index}>
                                    <span>{item}</span>
                                    <span>
                                        <button onClick={() => clear(index)}>Delete</button>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Shopping;
