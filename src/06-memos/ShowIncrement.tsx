interface ShowIncrementProps {
	increment: (value: number) => void;
}

export const ShowIncrement = ({ increment }: ShowIncrementProps) => {

	console.log('Me volvi a generar');

	
	
  return (
	<div>
		<button
			className="btn btn-primary"
			onClick={ () => {
				increment(5);
			}}
		>
			Incrementar
		</button>
	</div>
  )
}

