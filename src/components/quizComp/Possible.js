function Possible({name ,value}) {
    return (
          
        <label>
            <input type="radio" name={name} value={value}/>
            {value}

        </label>
         
      );
}

export default Possible;