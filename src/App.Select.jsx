export const Select = () => {
  //   return (
  //     <form
  //       onSubmit={(event) => {
  //         event.preventDefault();
  //         const form = new FormData(event.target);
  //         const value = form.get("selection");
  //         console.log(value);
  //       }}
  //     >
  //       <select
  //         name="selection"
  //         style={{
  //           fontSize: "1.5rem",
  //         }}
  //       >
  //         <option value="rock">Rock</option>
  //         <option value="paper">Paper</option>
  //         <option value="scissors">Scissors</option>
  //       </select>

  //       <button type="submit">CONTINUE</button>
  //     </form>
  //   );

  return (
    <div>
      <button>Rock</button>
      <button>Paper</button>
      <button>Scissors</button>
    </div>
  );
};
