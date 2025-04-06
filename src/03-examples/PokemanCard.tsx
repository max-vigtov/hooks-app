import { useLayoutEffect, useRef, useState } from "react";

interface PokemanCardProps {
	id: number;
	name: string;
	sprites: string[];
}

export const PokemanCard = ({ id, name, sprites = [] }: PokemanCardProps) => {
  
	const h2Ref = useRef<HTMLHeadingElement>(null);
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0})

	useLayoutEffect(() => {
		if ( !h2Ref.current ) return
	  	const { height, width } = h2Ref.current.getBoundingClientRect();

		setBoxSize({ height, width });		
	
	}, [])

	return (
	<section
	style={{ height: 200, display: 'flex', flexDirection: 'row' }} >
	  <h2 ref={ h2Ref } className="text-capitalize">#{id} - {name}</h2>
	  
	  <div>
		{
			sprites.map((sprite,) => (
				<img key={ sprite } src={ sprite } alt={ name } />
			))
		}

	  </div>

		<pre>
			{ JSON.stringify(boxSize) }
		</pre>
	</section>
  )
}

