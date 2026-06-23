import styles from "./Catigory.module.css";

function Catigory() {
    const categories = [
        { name: "All", icon: "fa-solid fa-utensils" },
        { name: "Pizza", icon: "fa-solid fa-pizza-slice" },
        { name: "Sushi", icon: "fa-solid fa-fish" },
        { name: "Burgers", icon: "fa-solid fa-burger" },
        { name: "Desserts", icon: "fa-solid fa-ice-cream" },
        { name: "Healthy", icon: "fa-solid fa-bowl-food" }
    ];

    return (
        <div className={styles.category}>
            <ul className={styles.list}>
                {categories.map((category, index) => (
                    <li key={index} className={styles.item}>
                        <i className={category.icon}></i>
                        <span>{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catigory;