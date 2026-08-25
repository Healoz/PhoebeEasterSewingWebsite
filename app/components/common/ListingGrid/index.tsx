import { FC } from "react";
import styles from "./style.module.scss";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const LISTINGS_QUERY = `*[_type == "listing"] | order(_createdAt desc){
    _id,
    title,
    price,
    image
}`;

export const revalidate = 60;

interface Props {}

const ListingGrid: FC<Props> = async ({}) => {
  const listings = await client.fetch(LISTINGS_QUERY);

  return (
    <div className={styles.listingGrid}>
      {listings.map((item: any) => (
        <div key={item._id} className={styles.card}>
          <Image
            src={urlFor(item.image).width(600).height(600).auto("format").url()}
            width={600}
            height={600}
            alt={item.title}
            className={styles.image}
          />
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ListingGrid;
