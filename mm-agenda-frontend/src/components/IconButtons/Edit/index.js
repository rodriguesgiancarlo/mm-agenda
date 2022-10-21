import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

const IconButtonEdit = props => (
  <IconButton variant="ghost" icon={<FiEdit />} {...props} />
);
export default React.memo(IconButtonEdit);
