import React from 'react';
import PropTypes from 'prop-types';
import { Image, Skeleton, useColorModeValue } from '@chakra-ui/react';
import LogoDark from '@/assets/logo.png';
import LogoLight from '@/assets/logo_light.png';

const Logo = props => {
  const { width, height } = props;
  const logoSrc = useColorModeValue(LogoDark, LogoLight);

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      draggable="false"
      fallback={<Skeleton />}
      htmlWidth={width}
      htmlHeight={height}
    />
  );
};

Logo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

Logo.defaultProps = {
  height: 'auto',
  width: '150px',
};

export default Logo;
