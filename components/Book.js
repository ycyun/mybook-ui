import {useRouter} from "next/router";
import Layout from "./Layout";

//
// const Book = ({book}) => (
//     <div>
//         <p>book.title</p>
//         <p>book.isbn</p>
//     </div>
// );


// const Book = (probs) => {
//     // const router = useRouter()
//     console.log("책의 정보는: " + probs)
//     console.log("책의 정보는: " + {probs})
//     return (
//         <div>
//             <p>제목 {probs} isbn {probs}</p>
//         </div>
//     );
// };

function Book({ book }) {
    console.log(book)
    return (
        <div>
            <b>{book.title}</b> <span>({book.isbn})</span>
        </div>
    );
}
export default Book;