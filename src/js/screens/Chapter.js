import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';

const Chapter = ({
  content,
  number,
}) => (
  <Box full align='center' justify='center' pad={{ horizontal: 'large' }}>
    <Headline strong>{number}</Headline>
    <Paragraph margin='medium' size='large'>
      {content.map(c =>
        <span key={c}>{c} <br /></span>
      )}
    </Paragraph>
  </Box>
);

Chapter.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  number: PropTypes.number.isRequired
};

export default Chapter;
