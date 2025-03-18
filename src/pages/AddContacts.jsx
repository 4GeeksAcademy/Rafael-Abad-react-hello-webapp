export const AddContacts = () => {
return(<div>
    <p>AddContacts</p>
</div>
)
}
/*export const AddContacts = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    useEffect(() => {
        fetch("urls" + params.id)
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            add contacts
            <input type="text" name="name" onChange={handleChange} />
            <input type="text" name="email" onChange={handleChange} />
            <input type="text" name="address" onChange={handleChange} />
            <input type="text" name="phone" onChange={handleChange} />
        </div>
    );
};*/