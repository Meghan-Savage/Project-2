const LocationForm = () => {
  return (
    <form className="w-90 m-10 ml-40">
      <div className="flex flex-row m-5 justify-between">
        <div className="">
          <label for="dropdown1">Store:</label>
          <select id="dropdown1">
            <option value="option1">No Frills</option>
            <option value="option2">Walmart</option>
            <option value="option3">Safeway</option>
          </select>
        </div>

        <div className="">
          <label for="dropdown2">Location:</label>
          <select id="dropdown2">
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>
        </div>
      </div>
      <div className="justify-center m-10">
        <button
          className="w-64 text-white bg-green-900 hover:bg-lime-600 block "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LocationForm;
