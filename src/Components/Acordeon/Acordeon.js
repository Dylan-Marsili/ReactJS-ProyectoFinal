import {useState} from 'react'
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

function Acordeon({items}){



    const [expandedIndex , setExpandedIndex] = useState(-1)

    const renderedItems = items.map((item, index) => {

        const isExpanded = index === expandedIndex
        
        const icon = <span>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return(
            <div key={item.id}>
                <div onClick={() =>setExpandedIndex(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })

    return <div>{renderedItems}</div>
}

export default Acordeon