import {Spinner} from 'react-bootstrap';

export const GifLoading = ({isLoading}) => {
  return (
    <>
      {
        isLoading && (
          <>
            <div className="d-flex gap-2 align-items-center">
              <Spinner className="gif__spinner" animation="border" role="status"></Spinner>
              <p class="m-0 p-0">Loading</p>            
            </div>
          </>)
      }
    </>
  )
}
