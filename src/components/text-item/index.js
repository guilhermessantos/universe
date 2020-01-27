import React from 'react'
import Highlight from 'react-highlight.js'
import {
  Item,
  SubTitleItem,
  ItemContent
} from './styles'

const TextItem = ({ props, code }) => (
  <>
    <div>      
      {Object.keys(props.weight).map(item => (
        <Item key={item}>
          <SubTitleItem>{item}</SubTitleItem>
          <ItemContent style={{ fontWeight: props.weight[item] }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</ItemContent>
        </Item>
      ))}

      {props.transform.map(item => (
        <Item key={item}>
          <SubTitleItem>{item}</SubTitleItem>
          <ItemContent style={{ textTransform: item }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</ItemContent>
        </Item>            
      ))}

      {props.align.map(item => (
        <Item key={item}>
          <SubTitleItem>{item}</SubTitleItem>
          <ItemContent style={{ textAlign: item }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</ItemContent>
        </Item>            
      ))}
    </div>

    {code && (
      <Highlight language='html'>      
        {Object.keys(props.weight).map(item => (   
          <div key={item}>
            &lt;p class='{props.prefix + item}'&gt;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatum!
            &lt;/p&gt;
          </div>
        ))}

        <br/>

        {props.transform.map(item => (
          <div key={item}>
            &lt;p class='{props.prefix + item}'&gt;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatum!
            &lt;/p&gt;
          </div>
        ))}

        <br/>

        {props.align.map(item => (
          <div key={item}>
            &lt;p class='{props.prefix + item}'&gt;
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatum!
            &lt;/p&gt;
          </div>
        ))}
      </Highlight>
    )}
  </>
)

export default TextItem
