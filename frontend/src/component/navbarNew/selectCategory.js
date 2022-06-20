import React,{ useState }from'react';
import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { categories } from '../Home/data';

const Select = styled.div`
      
`;

const MenuItem = styled.img`
      
`;

const selectCategory = ({ categories, selectCategory, onChange}) => {
    return (
        <container>
            <FormControl className="formcontrol">
                <Select value={selectCategory.id} onChange={onChange}>
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.name}
                        </MenuItem>
                     ))}
                </Select>
            </FormControl>
        </container>
    )
}

export default selectCategory;


