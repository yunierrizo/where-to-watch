import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.home}>
                <div className={styles.homeText}>
                    <h1 className={styles.gradientText}>WhereToWatch</h1>
                    <h4>
                        Your streaming guide for movies, TV shows & sports Find
                    </h4>
                </div>
                <SearchBox />
            </div>
        </main>
    );
}
