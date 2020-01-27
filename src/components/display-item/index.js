import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'
import { 
  BoxWrapper 
} from './styles'

const DisplayItem = ({ props }) => {
  const [display, setDisplay] = useState(Object.values(props.list)[1])

  return (
    <>
      <div>
        <SidebarNavigation>
          {Object.keys(props.list).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.list[item]}      
              hideKey
              handleClick={() => setDisplay(props.list[item])}
              active={display}
            />
          ))}
        </SidebarNavigation>     
        
        <BoxWrapper>
          <div style={{ display: display }}>
            {display}  
          </div>
        </BoxWrapper>
      </div>

      <Highlight language='html'>      
        {Object.values(props.list).map(item => (
          <div key={item}>
            &lt;div class='{props.prefix + item}'&gt;
              {item}
            &lt;/div&gt;
          </div>
        ))}
      </Highlight>
    </>
  )
}

export default DisplayItem
