import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

function App() {
    return (
        <div className="text-center flex flex-col items-center justify-center">
            <div className="text-9xl font-bold">FRONT PAGE</div>
            <div className="flex items-center justify-between py-2">
                <Button>
                    <Link to={"/auth"}>Login</Link>
                </Button>
            </div>
        </div>
    );
}

export default App;
