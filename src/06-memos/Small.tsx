import { memo } from "react";

interface SmallProps {
	value: number;
}

export const Small = memo(({ value }: SmallProps) => {

	console.log('Me volvi a generar :(');
	
  return (
	<small>{ value }</small>
  )
})


