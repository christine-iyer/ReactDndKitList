import { assets } from './data';
import Card from 'react-bootstrap/Card'
export default function List() {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	const listItems = assets.map((asset) => (
		<li key={asset.symbol}>
			<p>
				<b>{asset.symbol}:</b>
				{' ' +
					asset.shares +
					' shares @ $' +
					asset.purchasePrice +
					' cost ' +
					USDollar.format(asset.purchasePrice * asset.shares)}
			</p>
		</li>
	));
	return (
		<article>
			<Card
			listItems = {listItems} />
		</article>
	);
}
