const ItemListContainer = ({ greeting }) => {
  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center bg-light">
      <h1 className="text-center">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
