import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#f15025').all(20));
	
	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setError(false);
			let colors = new Values(color).all(20);
			setList(colors);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	}
	
	return (
  	    <React.Fragment>
	        <section className="container">
		        <h3>Color Generator</h3>
		        <form onSubmit={handleSubmit}>
			        <input
				        type="text"
				        className={`${error ? 'error' : null}`}
				        value={color}
				        placeholder="#f15025"
				        onChange={(e) => {setColor(e.target.value)}}
			        />
			        <button className="btn" type="submit">Submit</button>
		        </form>
	        </section>
	        <section className="colors">
		        {
		        	list.map((color, index) => {
		        		const hex = color.hex;
		        		return (
		        			<SingleColor key={index} {...color} index={index} hexColor={hex} />
				        );
			        })
		        }
	        </section>
        </React.Fragment>
    );
}

export default App
