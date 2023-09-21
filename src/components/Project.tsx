import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = ({ post }: any) => {
  return (
    <motion.div>
      <Link passHref href={"/"} scroll={false}>
        <article
          key={post.id}
          className="group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5"
        >
          <Image
            fill
            alt={`${post.title}`}
            src={
              "https://notionic.vercel.app/_next/image?url=%2Fcover.jpg&w=1080&q=75"
            }
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />
          <div className="block md-cover absolute inset-0"></div>
          <div className="sm-cover absolute inset-0"></div>
          <div className="relative mt-auto">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100">
                Notionic Example
              </h2>
              <span className="text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400">
                {/* <FormattedDate date={post.date} /> */}
              </span>
            </header>
            <p className="font-light block leading-8 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at purus ac mauris semper ultricies. Sed tortor elit, euismod vel
              eros nec, faucibus faucibus orci. Cras ultricies, ex at elementum
              mattis, augue nisi mattis risus, eu vulputate elit elit quis erat.
            </p>
            {/* w-4/5  */}
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default Project;
