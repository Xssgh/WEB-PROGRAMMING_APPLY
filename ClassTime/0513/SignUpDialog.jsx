function SingUpDialog(props) {
    const [nichname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    }

    const handleSignUp = () => {
        alert('어서 오세요, ${nickname}님');
    }

    return (
        <dialog
            title="화성 탐사 프로그램"
            message="닉네임을 입력해주세요">

            <input
                value={nickname}
                onChange={handleChange} />
            <button onCLick={handleSighup}>
                가입하기
            </button>


        </dialog>
    );
}