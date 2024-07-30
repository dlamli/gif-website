import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifCard, GifLoading } from "../../components";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="gif__title">{category}</h3>
            <GifLoading isLoading={isLoading}/>
            <figure className="gif__card-wrapper d-flex justify-content-center align-items-center flex-column flex-md-row flex-md-wrap">
                {
                    images.map((img) => (
                        <GifCard key={img.id} {...img} />
                    ))
                }
            </figure>
        </>
    );
};
