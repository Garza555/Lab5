import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const SearchApp = () => {
    const [categories, setCategories] = useState(['Star Wars']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // Evita duplicados
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Search App</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
};
