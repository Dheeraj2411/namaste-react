const Contact=()=>{
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold p-2 m-2 bg-slate-100">Contact Us</h2>

        <form>
          <input
            type="text"
            className="bg-slate-200 rounded-lg m-2 p-2 border-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-slate-200 rounded-lg m-2 p-2 border-2"
            placeholder="write Msg here"
          />

          <button className="bg-slate-200 rounded-lg m-2 p-2">Submit</button>
        </form>
      </div>
    );
            
}
export default Contact