import { Input, Button, Card } from 'shared/ui'
import { useState } from 'react'

export const Home = () => {
	const [ inputValue, setInputValue ] = useState('')

	return (
		<div>
			<Input label="test"
			       value={inputValue}
			       onChange={(value) => {
				       setInputValue(value)
			       }}
			       error={true}/>
			<Button label="test test button"
			        type="long"/>
			<Card>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt eaque eveniet expedita inventore
				nihil non optio repudiandae sed tenetur?
			</Card>
		</div>
	)
}
