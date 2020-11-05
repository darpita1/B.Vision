

export default function login() {
    return (<div>
                <h1 className="title">Login</h1>
                <form>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Username" name="username"></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" name="password"></input>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="button is-dark" value="Create Account" type="submit"/>
                            <input className="button is-dark" type="submit"/>
                        </div>
                    </div>
                </form>
            </div>);
}