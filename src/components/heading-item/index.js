import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'

const HeadingItem = ({ props, code }) => {
  const textSize = props.heading.size
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
        
        <div>
          <div style={{ fontSize: size, fontFamily: typographyFamily }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae consequuntur ducimus recusandae magni culpa eos sit veritatis alias soluta voluptatum omnis eligendi nisi dignissimos ex, reprehenderit consectetur molestiae tenetur asperiores?
          </p>

          <div style={{ fontSize: size, fontFamily: typographyFamily }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, in odit? Culpa veniam impedit magnam.
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, explicabo?
          </p>
        </div>
      </div>

      {code && (
        <Highlight language='html'>      
          {Object.keys(textSize).map(item => (
            <div key={item}>
              &lt;{item} class='{props.heading.prefix + " " + props.heading['prefix-size'] + item}'&gt;
                Lorem ipsum dolor sit amet.
              &lt;/{item}&gt;
            </div>
          ))}
        </Highlight>
      )}
    </>
  )
}

export default HeadingItem
