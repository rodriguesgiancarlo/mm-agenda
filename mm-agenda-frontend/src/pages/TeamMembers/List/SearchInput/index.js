import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { FiSearch, FiX } from 'react-icons/fi';
import useDebounce from '@/hooks/useDebounce';

const SearchInput = props => {
  const { value, onChange, maxW, size, ...rest } = props;
  const [displayValue, setDisplayValue] = useState(value);
  const inputRef = useRef(null);

  const debouncedChange = useDebounce(onChange, 500);

  const handleOnChange = value => {
    setDisplayValue(value);
    debouncedChange(value);
  };

  const handleClearOnClick = () => {
    handleOnChange('');
    inputRef.current.focus();
  };

  return (
    <InputGroup maxW={maxW} size={size}>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={FiSearch} color="gray.600" />}
      />
      <Input
        type="text"
        value={displayValue}
        ref={inputRef}
        onChange={e => handleOnChange(e.target.value)}
        {...rest}
      />
      {displayValue !== '' && (
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label="Limpar campo"
            icon={<FiX />}
            onClick={handleClearOnClick}
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

SearchInput.propTypes = {
  maxW: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

SearchInput.defaultProps = {
  maxW: '300px',
  placeholder: 'Digite para filtrar',
  size: 'sm',
};

export default SearchInput;
