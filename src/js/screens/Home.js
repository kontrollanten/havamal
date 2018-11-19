import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Chapter from './Chapter';

import havamalChapters from '../havamal.json';

class Home extends Component {
  render() {
    return (
      <div>
        <Box full pad={{ horizontal: 'small' }}>
          <Box key='header' align='center' flex='grow' justify='center'>
            <Headline size='medium' strong style={{ fontSize: '2.8rem' }}>Den höges sång</Headline>
          </Box>
          <Box align='center' justify='end'>
            <Heading tag='h3'>Om den svenska översättningen</Heading>
            <Paragraph size='medium' margin='small' align='center'>
              Översatt av <a href='http://runeberg.org/authors/braterik.html'>Erik Brate</a> 1913.<br />
              Den elektroniska utgåvan är producerad av Erik Larsson via <a href='http://runeberg.org/'>Projekt Runeberg</a>.
            </Paragraph>
          </Box>
        </Box>

        {havamalChapters
          .filter(c => !!c.nr)
          .map(({ nr: number, content }) =>
            <Chapter key={number} content={content} number={number} />
          )}
      </div>
    );
  }
}

export default Home;
