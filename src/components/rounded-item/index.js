import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'
import { 
  Box, 
  BoxWrapper 
} from './styles'

const HeadingItem = ({ props, code }) => {
  const [size, setSize] = useState(Object.values(props.size)[0])

  return (
    <>
      <div>
        <SidebarNavigation>
          {Object.keys(props.size).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.size[item]}      
              handleClick={() => setSize(props.size[item])}
              active={size}
            />
          ))}
        </SidebarNavigation>      
        
        <BoxWrapper>
          <Box style={{ borderRadius: size }} />
        </BoxWrapper>
      </div>

      {code && (
        <Highlight language='html'>      
          {Object.keys(props.size).map(item => (
            <div key={item}>
              &lt;div class='{props.prefix + item}'&gt;              
                Lorem ipsum dolor sit amet. 
              &lt;/div&gt;
            </div>
          ))}
        </Highlight>
      )} 
    </>      
  )
}

export default HeadingItem
