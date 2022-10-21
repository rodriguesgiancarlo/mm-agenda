import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { FiChevronRight } from 'react-icons/fi';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ options }) => {
  return (
    <ChakraBreadcrumb
      spacing="8px"
      separator={<FiChevronRight color="gray.500" />}
    >
      {options.map(option => {
        return option.to ? (
          <BreadcrumbItem key={uuid()}>
            <BreadcrumbLink as={Link} to={option.to}>
              {option.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={uuid()}>
            <Text>{option.label}</Text>
          </BreadcrumbItem>
        );
      })}
    </ChakraBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  options: PropTypes.array,
};

Breadcrumb.defaultProps = {
  options: [],
};

export default Breadcrumb;
