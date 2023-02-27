import { Input, Button } from 'shared/ui'
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
		</div>
	)
}
