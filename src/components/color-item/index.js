import React from 'react'
import Highlight from 'react-highlight.js'
import {
  Color,
  ColorWrapper,
  Container,
  Name
} from './styles'

const ColorItem = ({ props, code }) => (
  <>
    <Container>
      {Object.keys(props.list).map(item => (
        <ColorWrapper key={item}>
          <Color bg={props.list[item]}>
            {props.list[item]}
          </Color>

          <Name>{item}</Name>
        </ColorWrapper>
      ))}
    </Container>

    {code && (
      <Highlight language='html'>      
        {Object.keys(props.list).map(item => (
          <div key={item}>
            &lt;div class='{props.prefix + item}'&gt;
              {item}
            &lt;/div&gt;
          </div>
        ))}
      </Highlight>
    )}      
  </>
)

export default ColorItem
