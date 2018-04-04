import React from 'react';

import { Heading, HeadingMargin, Subheading, Body } from '../../../components/Typography';
import Wrapper from '../../../components/Wrapper';


import {translate} from 'admin-on-rest';

// import IconError from 'material-ui/svg-icons/alert/error';


const Assembly = ({translate}) => (

<Wrapper>

  <Heading>
    {translate("informer.assembly.assembly")}
  </Heading>

    <Body>
      <ul>
        <li>{translate("informer.assembly.options.day_before_event")}</li>
        <li>{translate("informer.assembly.options.event_day")}</li>
      </ul>
    </Body>


  <HeadingMargin>
    {translate("informer.assembly.disassembly")}
  </HeadingMargin>

    <Body>
      <ul>
        <li>{translate("informer.assembly.event_day")}</li>
      </ul>
    </Body>

</Wrapper>

);

export default translate(Assembly);
