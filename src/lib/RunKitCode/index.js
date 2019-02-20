import React from 'react';
import PropTypes from 'prop-types';
import Embed from 'react-runkit';
import scriptLoader from 'react-async-script-loader';

const Code = scriptLoader('https://embed.runkit.com')(
  ({ isScriptLoaded, ...rest }) => (isScriptLoaded ? (
    <Embed style={{ width: '100vw' }} nodeVersion="10" {...rest} />
  ) : (
    <h1>Loading</h1>
  )),
);

const RunKitCode = ({ source, preamble, title }) => {
  return (
    <div
      style={{
        width: '80vw',
      }}
    >
      {title && <h2>{title}</h2>}
      <Code source={source} preamble={preamble} title={title} />
    </div>
  );
};

RunKitCode.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string,
  preamble: PropTypes.string,
};

RunKitCode.defaultProps = {
  title: null,
  preamble: null,
};

export default RunKitCode;
