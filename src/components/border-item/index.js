import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'
import { 
  Box, 
  BoxWrapper 
} from './styles'

const BorderItem = ({ props, code }) => {
  const [size, setSize] = useState(Object.values(props.size)[0])
  const [position, setPosition] = useState(Object.keys(props.position)[0])
  const [boxBorder, setBoxBorder] = useState(size)
  
  const handlePosition = (newSize, newPosition) => {
    switch (newPosition) {
      case 'default':
        setBoxBorder(newSize)      
        break
      case 'top':
        setBoxBorder(`${newSize} 0 0 0`)
        break
      case 'bottom':
        setBoxBorder(`0 0 ${newSize} 0`)
        break
      case 'left': 
        setBoxBorder(`0 0 0 ${newSize}`)
        break
      case 'right': 
        setBoxBorder(`0 ${newSize} 0 0`)
        break
      case 'vertical': 
        setBoxBorder(`${newSize} 0`)
        break        
      case 'horizontal': 
        setBoxBorder(`0 ${newSize}`)
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
          <Box style={{ borderWidth: boxBorder }}>
            <span />
          </Box>
        </BoxWrapper>
      </div>

      {code && (
        <Highlight language='html'>      
          {Object.keys(props.size).map(item => (
            <div key={item}>
              &lt;div class='{props['prefix-size'] + item + ' ' + props['prefix-position']}'&gt;
                Lorem ipsum dolor sit amet.
              &lt;/div&gt;
            </div>
          ))}

          <br/>

          {Object.keys(props.position).map(item => (
            <div key={item}>
              &lt;div class='{props['prefix-size'] + Object.keys(props.size)[0] + ' ' + props['prefix-position'] + (props.position[item] == 'default' ? '' : props.position[item])}'&gt;
                Lorem ipsum dolor sit amet
              &lt;/div&gt;
            </div>
          ))}
        </Highlight>
      )}
    </>
  )
}

export default BorderItem
