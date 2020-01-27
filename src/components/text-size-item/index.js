import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'

const TextSizeItem = ({ props, code }) => {
  const textSize = props.text.size
  const typography = props.typography
  const [size, setSize] = useState(Object.values(textSize)[0])
  const [typographyFamily, setTypographyFamily] = useState(Object.values(typography)[0])

  return (
    <>
      <div>
        <SidebarNavigation>
          {Object.keys(textSize).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={textSize[item]}      
              handleClick={() => setSize(textSize[item])}
              active={size}
            />
          ))}
        </SidebarNavigation>      

        <SidebarNavigation>
          {Object.keys(typography).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={typography[item]} 
              hideKey
              handleClick={() => setTypographyFamily(typography[item])}
              active={typographyFamily}
            />
          ))}
        </SidebarNavigation>
        
        <div style={{ fontSize: size, fontFamily: typographyFamily }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eum.
          </p>
        </div>
      </div>

      {code && (
        <Highlight language='html'>      
          {Object.keys(textSize).map(item => (
            <div key={item}>
              &lt;p class='{props.text.prefix + item}'&gt;
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatum!
              &lt;/p&gt;
            </div>
          ))}
        </Highlight>
      )}
    </>
  )
}

export default TextSizeItem
