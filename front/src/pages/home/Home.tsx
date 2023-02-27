import { Input } from 'shared/ui/input/Input'
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
		</div>
	)
}
