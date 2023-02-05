import {getAlbums} from "@/feature/memory/api/getAlbums";

export const Albums = () => {
  const data = getAlbums()

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}

// import Link from "next/link";
// import {Loadable} from "@/helpers/Loadable";
// import {PhotoType} from "@/types/model/PhotoType";
//
// export const Albums = ({data}: { data: Loadable<PhotoType[]> }) => {
//   const photos = data.getOrThrow()
//
//   return (
//     <ul>
//       {photos.map((post) => (
//         <li key={post.id}>
//           <Link href={`/post/${post.id}`}>
//             {post.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }