import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';
import Breadcrumb from '@/components/Breadcrumb';

const PageHeader = props => {
  const { breadcrumbs, children } = props;

  return (
    <Stack
      direction={['column', null, 'row']}
      align={window.IS_MOBILE ? 'left' : 'center'}
      justify={'space-between'}
      spacing={2}
      minH="72px"
      w="full"
      py={2}
    >
      {breadcrumbs.length > 0 && <Breadcrumb options={breadcrumbs} />}
      {children}
    </Stack>
  );
};

PageHeader.propTypes = {
  breadcrumbs: PropTypes.array,
};

PageHeader.defaultProps = {
  breadcrumbs: [],
};

export default PageHeader;
