export default function Form({ handler }) {
  function handleSubmit(e) {
    e.preventDefault();

    console.log(e.target.items.value);
    handler((prev) => [
      ...prev,
      { id: Date.now(), name: e.target.items.value },
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Shopping cart</h3>
      <div className='mb-3'>
        <label>Item</label>
        <input
          type='text'
          className='form-control'
          placeholder='item'
          name='items'
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </div>
    </form>
  );
}
