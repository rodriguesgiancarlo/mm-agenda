import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiRefreshCcw } from 'react-icons/fi';

const IconButtonRefresh = props => (
  <IconButton
    variant="outline"
    aria-label="Clique para recarregar os dados"
    title="Clique para recarregar os dados"
    icon={<FiRefreshCcw />}
    {...props}
  />
);

export default React.memo(IconButtonRefresh);
