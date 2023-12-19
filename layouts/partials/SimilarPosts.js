import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";

const SimilarPosts = ({ posts }) => {
  return (
    <div className="row justify-center">
      {posts.map((post, i) => (
        <div key={`key-${i}`} className={"col-12 mb-4 sm:col-4"}>
          {post.frontmatter.video && (
            <YouTube className="rounded-lg" videoId={post.frontmatter.video}  alt={post.frontmatter.title}
                     opts={{
                       height: "230" ,
                       width:  "445",
                     }}
            >

            </YouTube>

          )}
          <ul className="mt-4 text-text">
            <li className="mb-2 mr-4 inline-block">
              {dateFormat(post.frontmatter.date)}
            </li>
            <li className="mb-2 mr-4 inline-block">
              <ul>
                {post.frontmatter.categories?.map((category, i) => (
                  <li className="inline-block" key={`category-${i}`}>
                    <Link
                      href={`/categories/${slugify(category)}`}
                      className="mr-3 hover:text-primary"
                    >
                      &#9635; {humanize(category)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <h3 className="h4">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SimilarPosts;
