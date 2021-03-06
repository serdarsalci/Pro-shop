import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant='top'
					style={{ height: '200px' }}
				/>
			</Link>
			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div' style={{ display: 'block' }}>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text as='h3'>${product.price}</Card.Text>
				<Card.Text>
					<small
						className={
							product.countInStock <= 0 ? 'text-danger' : 'text-secondary'
						}>
						{product.countInStock <= 0 ? 'Out of Stock' : 'Available'}
					</small>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
