import { useState } from "react";
import { Container } from "react-bootstrap";
import { AddCategory } from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState(["Lofi"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    const onCleanCategories = () => {
        setCategories([]);
    }

    return (
        <>
            <section className="gif-section">
                <Container>
                    <h1 className="title">GifApp</h1>
                    <AddCategory onAddCategory={onAddCategory} onCleanCategories={onCleanCategories} categories={categories}/>
                </Container>
            </section>
        </>
    );
};
