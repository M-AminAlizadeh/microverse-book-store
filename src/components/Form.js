const Form = () => (
  <div className="form-container">
    <h2>Add new book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        <option value="categories">Categories</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
