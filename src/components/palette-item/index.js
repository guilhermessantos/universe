import React from 'react'
import Highlight from 'react-highlight.js'
import {
  Color,
  ColorWrapper,
  Container,
  Name
} from './styles'

const PaletteItem = ({ props, code }) => {
  const exampleColor = Object.keys(props.list)[0]

  return (
    <>
      <Container>
        {Object.keys(props.list).map(item => (
          <ColorWrapper key={item}>                
            <Color bg={props.list[item].base}>
              {props.list[item].base}
            </Color>
  
            <Color bg={props.list[item].medium}>
              {props.list[item].medium}
            </Color>
  
            <Color bg={props.list[item].dark}>
              {props.list[item].dark}
            </Color>
  
            <Name>{item}</Name>
          </ColorWrapper>
        ))}
      </Container>
  
      {code && (
        <Highlight language='html'>      
          {Object.keys(props.list[exampleColor]).map(item => (
            <div key={item}>
              &lt;div class='{props.prefix + exampleColor + (item != 'base' ? '-' + item : '')}'&gt;
                {item}
              &lt;/div&gt;
            </div>
          ))}
        </Highlight>
      )}    
    </>
  )
}

export default PaletteItem
