import React from 'react';
import { storiesOf } from '@storybook/react';
import IframeWrapped from '@ox2/iframe/IframeWrapped';

storiesOf('📘', module)
  .add('Docs Local', () =>
    <IframeWrapped url={'docs/index.html'} />,
  )
  .add('Docs Dev', () =>
    <IframeWrapped url={'http://localhost:55012'} />,
  )
  .add('Docs Live', () =>
    <IframeWrapped url={'https://ox2.github.io/iframe/'} />,
  );
