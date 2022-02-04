import Main from './main/Main';
function Settings() {
    return ( 
        <Main>
        <form>
            <div className="mb-3 mt-3">
            <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty" className="form-select">
                    <option value="easy">
                        Easy
                    </option>
                    <option value="medium">
                        Medium
                    </option>
                    <option value="Hard">
                            Hard
                    </option>
                </select>

            </div>

            <div className="mb-3 mt-3">
            <label htmlFor="number"> Number of questions: </label>
                <select id="number" className="form-select">
                    <option value="20">
                        20
                    </option>
                    <option value="15">
                        15
                    </option>
                    <option value="10">
                            15
                    </option>
                </select>

            </div>
            <button type="submit" className="btn btn-primary">
                 Update
            </button>
        </form>
</Main>
     );
}

export default Settings;