import { Card } from "react-bootstrap";

export const GifCard = ({ title, url }) => {
    return (
        <>
            <Card className="gif__card d-inline-flex flex-column justify-content-center">
                <Card.Img className="gif__card--img" variant="top" src={url} />
                <Card.Body className="m-0 p-0 w-100">
                    <Card.Title className="gif__card-title test-sass">{title}</Card.Title>
                    <Card.Text className="gif__card-text">
                        Card description
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
