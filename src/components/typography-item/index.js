import React from 'react'
import {
  Section,
  BigLetter,
  Letters,
  Example,
  SubTitleTypography
} from './styles'

const TypographyItem = ({ props }) => (
  <>
    {Object.values(props).map((item, index) => (
      <Section item={item} key={'type' + index}>
        <BigLetter>
          Aa
        </BigLetter>

        <Letters>
          <SubTitleTypography>{item}</SubTitleTypography>
          <div className='uppercase'>abcdefghijklmnoprstuvwxyz</div>
          <div>abcdefghijklmnoprstuvwxyz</div>
          <div>123456789</div>
        </Letters>

        <Example>      
          <strong>
            What is Lorem Ipsum?
          </strong>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </Example>
      </Section>
    ))}
  </>
)

export default TypographyItem
