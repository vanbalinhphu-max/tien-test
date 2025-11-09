import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Trang chủ bán áo thun",
  description: "Cung cấp các áo thun nam, áo thu nữ, áo thun trẻ em với nhiều mẫu mã",
};


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Đây là trang chủ</h1>
      <Image src="/next.svg" alt="Hình ảnh" width={250} height={100} />
    </div>
  );
}
