function Card({ children }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
            {children}
        </div>
    );
}
function App() {
    return (
        <Card>
            <h2>안녕하세요</h2>
            <p>이것은 카드 컴포넌트입니다.</p>
        </Card>
    );
}
export default App;
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
function App(props) {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            }
        />
    );
}