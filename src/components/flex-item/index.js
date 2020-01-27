import React, { useState } from 'react'
import Highlight from 'react-highlight.js'
import { SidebarNavigation } from '../sidebar-navigation'
import { SidebarNavigationItem } from '../sidebar-navigation-item'
import { 
  BoxWrapper 
} from './styles'

const FlexItem = ({ props }) => {
  const [justify, setJustify] = useState(Object.values(props.justify)[0])
  const [align, setAlign] = useState(Object.values(props.align)[0])

  return (
    <>
      <div>
        <SidebarNavigation>
          {Object.keys(props.justify).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.justify[item]}
              handleClick={() => setJustify(props.justify[item])}
              active={justify}
            />
          ))}
        </SidebarNavigation>     

        <SidebarNavigation>
          {Object.keys(props.align).map(item => (
            <SidebarNavigationItem 
              key={item}
              title={item}
              value={props.align[item]}
              handleClick={() => setAlign(props.align[item])}
              active={align}
            />
          ))}
        </SidebarNavigation>     
        
        <BoxWrapper>
          <div style={{ justifyContent: justify, alignItems: align }}>
            <span/>
            <span/>
            <span/>
          </div>
        </BoxWrapper>
      </div>

      <Highlight language='html'>      
        {Object.keys(props.justify).map(item => (
          <div key={item}>
            &lt;div class='{props.prefix.justify + item}'&gt;
              {item}
            &lt;/div&gt;
          </div>
        ))}

        <br/>

        {Object.keys(props.align).map(item => (
          <div key={item}>
            &lt;div class='{props.prefix.align + item}'&gt;
              {item}
            &lt;/div&gt;
          </div>
        ))}
      </Highlight>
    </>
  )
}

export default FlexItem
