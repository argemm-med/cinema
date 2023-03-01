import { Button, Card } from 'shared/ui'
import { InfoBlock } from 'widgets'
import { useState } from 'react'

export const Home = () => {
	const [ active, setActive ] = useState(false)

	const handleInfo = (): void => {
		setActive(true)
		setTimeout(() => {
			setActive(false)
		}, 3500)
	}

	return (
		<div className='container'>
			<InfoBlock isActive={active}
			           type="error" title="title"
			           description="Lorem ipsum dolor sit amet, consecteetur?"/>
			<Button label="on / off" handleClick={handleInfo}/>
			<Card>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt eaque eveniet expedita inventore
				nihil non optio repudiandae sed tenetur?
			</Card>
		</div>
	)
}
