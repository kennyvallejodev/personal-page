import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled
const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
`;

const ArrowColumn = styled.div`
	position: relative;
	width: 10%;

	img {
		cursor: pointer;
	}
`;

const ImageContainer = styled.div`
	width: 80%;
	position: relative;
	padding: 1rem;
	box-sizing: border-box;
	height: auto;
	text-align: center;

	display: flex;
	flex-wrap: nowrap;

	overflow-x: hidden;

	div {
		border-radius: 1.5rem;
	}
`;

export interface PhotoCarouselI {

};

interface ImageI {
	id: string | number;
	path: string;
};

const Images: ImageI[]= [
	{
		id: 1,
		path: '/assets/posts/post-1.png',	
	},
	{
		id: 2,
		path: '/assets/posts/post-2.png',	
	},
	{
		id: 3,
		path: '/assets/posts/post-3.png',	
	},
];

export const PhotoCarousel: React.FC<PhotoCarouselI> = (props) => {

	const [selectedImage, setSelectedImage] = useState<ImageI>(Images[1]);

	// TODO: Refactor this functions
	// I am tired
	function handleAction(action: 'PREVIOUS' | 'NEXT') {
		if (action === 'PREVIOUS') {
			const TargetImage = Images.find((v) => v.id === (Number(selectedImage.id) - 1));
			if (TargetImage) {
				setSelectedImage(TargetImage);
			} else {
				setSelectedImage(Images[Images.length - 1]);
			}
			return;
		}

		// Next action
		const TargetImage = Images.find((v) => v.id === (Number(selectedImage.id) + 1));
		if (TargetImage) {
			setSelectedImage(TargetImage);
			return;
		} 
		setSelectedImage(Images[0]);
	}

	return (
		<Container>
			<ArrowColumn>
				<Image
					src='/assets/icons/arrow-left.svg'
					alt='Arrow Left'
					width={50}
					height={50}
					objectFit='contain'
					unoptimized
					onClick={() => handleAction('PREVIOUS')}
					className='clickable'
				/>
			</ArrowColumn>

			<ImageContainer>
				<div style={{ display: 'block', margin: 'auto' }}>
					<Image
						src={selectedImage.path}
						alt='Good Coder Post'
						width={500}
						height={500}
						unoptimized
					/>
				</div>
			</ImageContainer>

			<ArrowColumn>
				<Image
					src='/assets/icons/arrow-right.svg'
					alt='Arrow Left'
					width={50}
					height={50}
					unoptimized
					objectFit='contain'
					onClick={() => handleAction('NEXT')}
				/>
			</ArrowColumn>
		</Container>
	);
};