import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'
import { 
  Box, 
  BoxWrapper 
} from './styles'

const MarginItem = ({ props, code }) => {
  const [size, setSize] = useState(Object.values(props.size)[0])
  const [position, setPosition] = useState(Object.keys(props.position)[0])
  const [boxMargin, setBoxMargin] = useState(size)
  
  const handlePosition = (newSize, newPosition) => {
    switch (newPosition) {
      case 'default':
        setBoxMargin(newSize)      
        break
      case 'top':
        setBoxMargin(`${newSize} 0 0 0`)
        break
      case 'bottom':
        setBoxMargin(`0 0 ${newSize} 0`)
        break
      case 'left': 
        setBoxMargin(`0 0 0 ${newSize}`)
        break
      case 'right': 
        setBoxMargin(`0 ${newSize} 0 0`)
        break
      case 'vertical': 
        setBoxMargin(`${newSize} 0`)
        break        
      case 'horizontal': 
        setBoxMargin(`0 ${newSize}`)
      break                
    }
  }

  return (
    <>
      <div>
        <SidebarNavigation>
          {Object.keys(props.size).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.size[item]}      
              handleClick={() => {
                setSize(props.size[item])
                handlePosition(props.size[item], position)
              }}
              active={size}
            />
          ))}
        </SidebarNavigation>

        <SidebarNavigation>
          {Object.keys(props.position).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.position[item]}
              hideValue
              handleClick={() => {
                setPosition(item)
                handlePosition(size, item)
              }}
              active={position}
            />
          ))}
        </SidebarNavigation>
                
        <BoxWrapper>
          <Box>
            <span style={{ margin: boxMargin }} />
          </Box>
        </BoxWrapper>        
      </div>

      {code && (
        <Highlight language='html'>      
          {Object.keys(props.size).map(item => (
            <div key={item}>
              &lt;div class='{props.prefix + props.separator + item}'&gt;
                Lorem ipsum dolor sit amet.
              &lt;/div&gt;
            </div>
          ))}

          <br/>

          {Object.keys(props.position).map(item => (
            <div key={item}>
              {item != 'default' && (
                <>
                  &lt;div class='{props.prefix + props.position[item] + props.separator + Object.keys(props.size)[0]}'&gt;
                    Lorem ipsum dolor sit amet.
                  &lt;/div&gt;
                </>
              )}
            </div>
          ))}
        </Highlight>
      )}      
    </>
  )
}

export default MarginItem
