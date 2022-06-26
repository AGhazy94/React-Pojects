import React, { useState, useEffect } from 'react';
import classes from './MemeForm.module.css';

function MemeForm() {
	const [memeData, setMemeData] = useState([]);

	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImg: '',
		radomMemeName: '',
	});

	useEffect(() => {
		async function getMemes() {
			const res = await fetch('https://api.imgflip.com/get_memes');
			const data = await res.json();
			setMemeData(data.data.memes);
		}
		getMemes();
	}, []);

	const getMemeImgHandler = () => {
		const randomMeme = memeData[Math.floor(Math.random() * memeData.length)];
		setMeme((prevState) => ({
			...prevState,
			randomImg: randomMeme.url,
			radomMemeName: randomMeme.name,
		}));
	};

	const onChangeHandler = (e) => {
		const { value, name } = e.target;
		setMeme((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<main className={classes.memeForm}>
			<div className={classes.memeForm__Form}>
				<input
					type="text"
					placeholder="Enter header"
					name="topText"
					value={meme.topText}
					onChange={onChangeHandler}
				/>
				<input
					type="text"
					placeholder="Enter footer"
					name="bottomText"
					value={meme.bottomText}
					onChange={onChangeHandler}
				/>
				<button onClick={getMemeImgHandler}>Get a new meme image 🌝</button>
			</div>
			{meme.randomImg && (
				<div className={classes.memeForm__img}>
					<h2>{meme.topText}</h2>
					<img src={meme.randomImg} alt={meme.radomMemeName} />
					<h2>{meme.bottomText}</h2>
				</div>
			)}
		</main>
	);
}

export default MemeForm;
