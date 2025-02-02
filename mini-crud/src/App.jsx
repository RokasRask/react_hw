import './buttons.scss';
import './app.css';

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create />
                    </div>
                    <div className="col-8">
                        <List />
                    </div>
                </div>
            </div>
            {
                editData !== null && <Edit />
            }
            {
                deleteData !== null && <Delete />
            }
        </>
    );
}

export default App;