import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { GifGrid } from "../../components";

export const AddCategory = ({ onAddCategory, categories}) => {
    const [inputValue, setInputValue] = useState("");
    const [categoryFilter, setCategoryFilter] = useState(categories);

    const onInputChange = ({ target }) => setInputValue(target.value);

    const onFormSubmit = (e) => {
        e.preventDefault();

        const trimInput = inputValue.trim();
        if (trimInput.length <= 1) return;

        setInputValue("");
        onAddCategory(trimInput);
    };

    const onCleanCategories = () => {
        setCategoryFilter([]);
    };

    useEffect(() => {
        setCategoryFilter(categories);
    }, [categories]);

    return (
        <>
        <div className="d-flex align-items-center gap-1">
            <Form onSubmit={onFormSubmit}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Search GIFs :)"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </InputGroup>
            </Form>
            <Button onClick={onCleanCategories} variant="info">Limpiar Busqueda</Button>
        </div>
            {categoryFilter.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))}
        </>
    );
};
