import React from 'react';

import stylesheet from './HelloWorld.less';

export default class HelloWorld extends React.Component {
  render() {
    return <marquee className={stylesheet.marquee}>Hello World!</marquee>;
  }
}
